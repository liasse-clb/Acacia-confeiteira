import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter, Cardo, Pattaya } from "next/font/google";
import "@/styles/globals.css";
import "../styles/carrossel.css";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: "400",
});
export const pattaya = Pattaya({
  subsets: ["latin"],
  variable: "--font-pattaya",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider>
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export const fonts = {
  sans: inter.variable,
  mono: "--font-mono",
};
