import { Html, Head, Main, NextScript } from 'next/document'
// import favicon from "../images/favicon.png"
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <link rel="shortcut icon" href={favicon} /> */}
        {/* <link rel="shortcut icon" href="../images/icons/favicon.ico" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
