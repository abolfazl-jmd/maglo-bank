import Document, { Main, Html, Head, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="light">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
