import { StateContext } from '@/Context/StateContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  );
}
