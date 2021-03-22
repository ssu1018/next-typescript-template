import { ThemeProvider, Global } from '@emotion/react';
import reset from '@/styles/reset';
import { AppProps } from 'next/app';

import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
