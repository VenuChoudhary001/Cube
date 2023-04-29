import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en" onContextMenu={"return false"}>
      <Head>
        <link
          href="https://unpkg.com/cloudinary-video-player@1.9.5/dist/cld-video-player.min.css"
          rel="stylesheet"
        />
        <script
          async
          src="https://unpkg.com/cloudinary-video-player@1.9.5/dist/cld-video-player.min.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
