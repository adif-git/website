import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect, useState } from 'react';
import Router from 'next/router';

import '../styles/globals.scss';
import Loading from '@/components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return <>{loading ? <Loading /> : <Component {...pageProps} />}</>;
}

export default MyApp;
