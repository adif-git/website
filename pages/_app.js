import '../styles/globals.sass';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const WebFontLoader = require('webfontloader');
    WebFontLoader.load({
      google: {
        families: ['Source Sans Pro:900,600,400', 'Chewy'],
      },
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
