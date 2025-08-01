import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
