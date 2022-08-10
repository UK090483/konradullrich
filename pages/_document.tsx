import clsx from "clsx";
import Document, { Head, Html, Main, NextScript } from "next/document";

const isDevelopment = process.env.NODE_ENV === "development";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          className={clsx("text-text bg-background ", {
            "debug-screens": isDevelopment,
          })}
        >
          <Main />
          <div id="app-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
