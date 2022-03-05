import { AppProps } from 'next/dist/shared/lib/router/router';

import '../styles/globals.sass';

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
