// UI/server/server.ts
import React from 'react';
import { Capture, preloadAll } from 'react-loadable';
import { getDataFromTree } from '@apollo/react-hooks';
import { ServerPortal } from '@jesstelford/react-portal-universal/server';
import { ServerLocation, isRedirect } from '@reach/router';
import { renderToNodeStream, renderToString } from 'react-dom/server';
import { readJSON } from 'fs-extra';
import { Context } from 'koa';
import App from 'ui/App';
import { PropProvider, PathPropsObject, Props, resetProps } from 'ui/Components/PropProvider';
import { HeadProvider } from 'ui/Components/HeadProvider';
import 'isomorphic-unfetch';
import { initApollo } from 'ui/lib/initApollo';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { Config } from 'ui/Components/ConfigProvider';
import { ServerStyleSheets } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from 'ui/Components/Theme';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider } from 'ui/lib/ApolloProvider';

export interface AppState {
  PROPS: any;
  SESSION_PROPS: PathPropsObject[];
  APOLLO_STATE: NormalizedCacheObject;
  CONFIG: Config;
}

export const uiServer = async (ctx: Context, config: Config) => {
  await preloadAll();
  await resetProps();
  ctx.respond = false;
  ctx.status = 200;
  const manifestFile = `dist/public/parcel-manifest.json`;
  const cssFile = `dist/CSS.json`;
  const [parcelManifest, cssManifest] = await Promise.all([
    readJSON(manifestFile) as Promise<{ [key: string]: string }>,
    readJSON(cssFile) as Promise<{ [any: string]: string }>
  ]);
  interface Source {
    src: string;
    type: 'script' | 'style';
  }

  const sources: Source[] = [
    { type: 'script', src: parcelManifest['client.tsx'] },
    { type: 'style', src: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
    { type: 'style', src: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ];
  const modules: string[] = [];
  let sessionProps: PathPropsObject[] = [];
  let localProps: any;
  const head: JSX.Element[] = [];
  const hashes: string[] = [];

  const client = initApollo({ baseUrl: config.baseUrl, token: ctx.cookies.get('token') });
  const sheets = new ServerStyleSheets();

  try {
    renderToString(
      <ServerLocation url={ctx.url}>
        <Capture report={moduleName => modules.push(moduleName)}>
          <MuiThemeProvider theme={theme}>
            <CookiesProvider cookies={ctx.universalCookies}>
              <ApolloProvider client={client}>
                <PropProvider ctx={ctx} sessionProps={sessionProps} props={{}}>
                  <HeadProvider tags={head} hashes={hashes}>
                    <App />
                  </HeadProvider>
                </PropProvider>
              </ApolloProvider>
            </CookiesProvider>
          </MuiThemeProvider>
        </Capture>
      </ServerLocation>
    );
    // Pre-render to get Modules and shit
    await getDataFromTree(
      <ServerLocation url={ctx.url}>
        <MuiThemeProvider theme={theme}>
          <CookiesProvider cookies={ctx.universalCookies}>
            <ApolloProvider client={client}>
              <PropProvider ctx={ctx} sessionProps={sessionProps} props={{}}>
                <HeadProvider tags={head} hashes={hashes}>
                  <App />
                </HeadProvider>
              </PropProvider>
            </ApolloProvider>
          </CookiesProvider>
        </MuiThemeProvider>
      </ServerLocation>
    );
    localProps = (await Props) || {};
    sessionProps = [{ path: ctx.path, props: (await Props) || {} }];
  } catch (e) {
    if (isRedirect(e)) {
      ctx.redirect(e.uri);
      ctx.res.end();
      return;
    }

    localProps = (await Props) || {};
    sessionProps = [{ path: ctx.path, props: (await Props) || {} }];
  }

  modules.map(moduleName =>
    Object.entries(parcelManifest)
      .filter(([a, b]) => a === moduleName || cssManifest[moduleName] === b)
      .map(([modulePath, file]) => sources.unshift({ src: file, type: file.includes('.js') ? 'script' : 'style' }))
  );

  const MainApp = (
    <ServerLocation url={ctx.url}>
      <MuiThemeProvider theme={theme}>
        <CookiesProvider cookies={ctx.universalCookies}>
          <ApolloProvider client={client}>
            <PropProvider ctx={ctx} sessionProps={sessionProps} props={localProps}>
              <HeadProvider tags={head} hashes={hashes}>
                <App />
              </HeadProvider>
            </PropProvider>
          </ApolloProvider>
        </CookiesProvider>
      </MuiThemeProvider>
    </ServerLocation>
  );

  const portals = new ServerPortal();
  const element = portals.collectPortals(MainApp);
  const testElem = renderToString(sheets.collect(element));
  const test = portals.appendUniversalPortals(testElem);

  const componentStream = renderToNodeStream(<></>);

  const mainCSS = `
  #app {
    display: flex;
    flex-direction: column;
  }

  #full-closed + #app_content {
    margin-left: -240px;
  }

  #full-open + #app_content {
    margin-left: 0;
  }

  html,body,#app {
    background: #eee;
    margin: 0;
    height: 100%;
  }
  nav li {
    display: table-cell;
    padding: 0 14px;
  }
  nav ol {
    padding: 0;
    display: table;
    flex-wrap: unset !important;
    align-items: unset !important;
    width: max-content;
  }
  nav {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  nav::-webkit-scrollbar { 
    display: none;  // Safari and Chrome
  }

  nav li a {
    white-space: nowrap;
  }`;

  const Head = renderToString(
    <head>
      <link rel='manifest' href='/manifest.json' />
      <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' name='viewport' />
      {...head}
      {sources && sources.map(({ src, type }, index) => <link rel='preload' href={src} as={type} key={index} />)}
      {sources &&
        sources
          .filter(({ type }) => type === 'style')
          .map(({ src }, index) => <link rel='stylesheet' type='text/css' href={src} key={index} />)}
      <style id='jss-server-side' dangerouslySetInnerHTML={{ __html: sheets.toString() }} />
      <style type='text/css' dangerouslySetInnerHTML={{ __html: mainCSS }} />
    </head>
  );

  const htmlStart = `
  <!doctype html>
    <html>
      ${Head}
      <body>
      <div id="app">`;

  ctx.res.write(htmlStart);
  componentStream.pipe(
    ctx.res,
    { end: false }
  );

  const appState: AppState = {
    SESSION_PROPS: sessionProps,
    PROPS: localProps,
    APOLLO_STATE: client.cache.extract(),
    CONFIG: config
  };

  const htmlEnd = `</div>
    <script type="text/javascript">window.APP_STATE = ${JSON.stringify(appState)}</script>
    ${renderToString(
      <>
        {' '}
        {sources &&
          sources
            .filter(({ type }) => type === 'script')
            .reverse()
            .map(({ src }, index) => <script async={true} type='text/javascript' charSet='utf-8' key={index} src={src} />)}
      </>
    )}
  </body>
  </html>`;

  componentStream.on('end', () => {
    ctx.res.write(test);
    ctx.res.write(htmlEnd);

    ctx.res.end();
  });
};
