import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head lang="en">
        <link rel="shortcut icon" href="img/favicon.png" type="img/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/custom_app.js"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument