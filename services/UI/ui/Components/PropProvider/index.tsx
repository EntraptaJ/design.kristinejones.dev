// UI/ui/Components/PropProvider/index.tsx
import React, { createContext, ReactNode, useState } from 'react';
import { Context } from 'koa';
import { globalHistory, HistoryListenerParameter } from '@reach/router';

export let Props: Promise<any>;

export interface PathPropsObject {
  path: string;
  props: any;
}

export const resetProps = () => {
  // @ts-ignore
  Props = undefined;
};

export type getProp = (ctx?: Context) => Promise<any>;

interface PropContextType {
  props: any;
  sessionProps: PathPropsObject[];
  useProps: (prop: getProp) => void;
  ctx?: Context;
}

export const PropContext = createContext<PropContextType>({
  useProps: props => {
    Props = props();
  },
  // @ts-ignore
  props: Props,
  sessionProps: [],
  ctx: undefined
});

interface PropProviderProps {
  children: ReactNode;
  ctx?: Context;
  props: any;
  sessionProps: PathPropsObject[];
}

export let setNewProps: (c: HistoryListenerParameter) => Promise<boolean>;

export let setProps: (props: any) => void;

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const PropProvider = (prop: PropProviderProps) => {
  const { ctx, children, sessionProps } = prop;
  const [pageProps, setPageProps] = useState(prop.props);
  const useProps = (newProp: getProp) => {
    const oldProps = sessionProps.find(({ path: pth }) => pth === (ctx ? ctx.path : globalHistory.location.pathname));

    if (oldProps) Props = oldProps.props;
    else Props = newProp(ctx);
  };

  setProps = (props: any) => setPageProps(props);

  setNewProps = async (c: HistoryListenerParameter) => {
    const oldProps = sessionProps.find(({ path: pth }) => pth === c.location.pathname);

    if (oldProps) {
      setPageProps(oldProps.props || {});
      // @ts-ignore
      Props = undefined;
      return true;
    } else {
      await timeout(50);
      if (typeof (await Props) === 'undefined') return false;
      const localProps = await Props;
      sessionProps.push({ path: c.location.pathname, props: localProps || {} });
      setPageProps(localProps || {});
    }
    // @ts-ignore
    Props = undefined;
    return false;
  };

  return (
    <PropContext.Provider
      value={{
        useProps,
        props: pageProps,
        sessionProps,
        ctx
      }}
    >
      {children}
    </PropContext.Provider>
  );
};
