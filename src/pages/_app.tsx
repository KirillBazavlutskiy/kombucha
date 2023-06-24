import '@/styles/globals.css';
import cn from 'classnames';
import type { AppProps } from 'next/app';

import localFont from 'next/font/local';
import {montserrat, pobeda, sverdlovsk} from "@/fonts";


const fonts = localFont({
  src: [
    {
      path: '../fonts/pobeda-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/pobeda-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/sverdlovsk.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--fonts',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(
        fonts.variable,
        pobeda.variable,
        sverdlovsk.variable,
        montserrat.variable,
        'font-sans'
    )}>
      <Component {...pageProps} />
    </main>
  );
}
