import type { AppProps } from "next/app";

import { useRouter } from "next/router";
/*import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";*/
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "../styles/carrossel.css";
import { Pattaya } from "next/font/google";

export const pattaya = Pattaya({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pattaya",
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider>
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>

      {/* <Analytics />
      <SpeedInsights />*/}
    </>
  );
}

export const fonts = {
  sans: inter.variable,
  mono: "--font-mono",
};
