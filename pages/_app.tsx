import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { Inter, Cardo, Pattaya } from "next/font/google";
import "../styles/carrossel.css";

import { fontSans, fontMono } from "@/config/fonts";
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

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
