import Document, { Head, Html, Main, NextScript } from "next/document";

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
        <body className="text-text bg-background debug-screens ">
          <Main />
          <div id="app-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
