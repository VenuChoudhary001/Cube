import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://unpkg.com/cloudinary-video-player@1.9.5/dist/cld-video-player.min.css"
          rel="stylesheet"
        />
        <Script
          src="https://unpkg.com/cloudinary-video-player@1.9.5/dist/cld-video-player.min.js"
          type="text/javascript"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
