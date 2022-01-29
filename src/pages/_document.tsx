import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, globalStyles } from "@app/theme";

export default class Document extends NextDocument {
  render() {
    globalStyles();

    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="FF007A" />
          <meta name="theme-color" content="FF007A" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="@scotato" key="twhandle" />

          {/* Open Graph */}
          <meta property="og:url" content="https://scotato.com" key="ogurl" />
          <meta property="og:image" content="/share.png" key="ogimage" />
          <meta
            property="og:site_name"
            content="scotato.com"
            key="ogsitename"
          />
          <meta property="og:title" content="Scott Dodge" key="ogtitle" />
          <meta
            property="og:description"
            content="Design ⌘ Software "
            key="ogdesc"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
