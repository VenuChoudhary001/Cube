import Layout from "../layout";
import "../styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.6.4.min.js"
          integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
          crossorigin="anonymous"
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
