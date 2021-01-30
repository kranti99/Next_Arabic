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
        <link rel="shortcut icon" href="favicon.ico" type="img/x-icon" />
            <meta charset="UTF-8" />
            {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
            <meta name="noindex" content="nofollow" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/app.js" crossorigin="anonymous"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument