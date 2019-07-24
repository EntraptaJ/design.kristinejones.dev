import React from 'react';
import { Renderer, hydrate, render as ReactDOMRender } from 'react-dom';
import AppComponent from 'ui/App';
import { preloadReady } from 'react-loadable';
import { PropProvider, setNewProps, setProps, Props } from 'ui/Components/PropProvider';
import { HeadProvider, clearHead, Hashes } from 'ui/Components/HeadProvider';
import { ApolloProvider } from 'ui/lib/ApolloProvider';
import { ConfigProvider } from 'ui/Components/ConfigProvider';
import { prepareClientPortals } from '@jesstelford/react-portal-universal';
import { globalHistory } from '@reach/router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from 'ui/Components/Theme';
import { CookiesProvider } from 'react-cookie';

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const hashes: string[] = [];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async function() {
    const worker = await navigator.serviceWorker.register('/service-worker.ts', { scope: '/' });
    console.log('SW registered: ', worker);
  });
}

const Main = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CookiesProvider>
        <ConfigProvider {...window.APP_STATE.CONFIG}>
          <ApolloProvider state={window.APP_STATE.APOLLO_STATE}>
            <HeadProvider tags={[]} hashes={hashes}>
              <PropProvider sessionProps={window.APP_STATE.SESSION_PROPS} props={window.APP_STATE.PROPS}>
                <AppComponent />
              </PropProvider>
            </HeadProvider>
          </ApolloProvider>
        </ConfigProvider>
      </CookiesProvider>
    </MuiThemeProvider>
  );
};

const render = async (renderFunction: Renderer) => {
  prepareClientPortals();
  renderFunction(<Main />, document.getElementById('app'));
};
globalHistory.listen(async loc => {
  await clearHead(hashes);
  const hasProps = await setNewProps(loc);
  if (hasProps) await clearHead(hashes);
});

preloadReady().then(() => render(hydrate));

const hot = (module as any).hot;
if (hot && hot.accept) {
  hot.accept(async () => {
    window.APP_STATE.SESSION_PROPS = [];
    await clearHead(Hashes);
    await timeout(50);
    await setProps((await Props) || {});
    await Promise.all([clearHead(Hashes), render(ReactDOMRender)]);
  });
}
