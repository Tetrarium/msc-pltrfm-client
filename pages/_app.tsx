import "./global.sass";

import { AppProps } from "next/app";

import { wrapper } from "@/store";

import { Providers } from "./provider";

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default wrapper.withRedux(App);
