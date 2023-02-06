import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

import "@assets/css/main.css";

import "typeface-open-sans";
import "typeface-merriweather";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
