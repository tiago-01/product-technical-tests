import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * deixei apenas o jquery no _document.tsx
 * no components/PageLayout.tsx coloquei o seguinte
 *
 * useEffect(() => {
 *     const script = document.createElement('script');
 *     script.src = "/js/webflow.js";
 *     document.body.appendChild(script);
 *     return () => {
 *         document.body.removeChild(script);
 *     }
 * }, [])
 *
 * no ficheiro de webflow.js fiz o seguinte na linha 203
 *
 * if(factory) {
 *   var instance = modules[name] = factory($, _, options) || {};
 * } else {
 *   var instance = modules[name] = {};
 * }
 *
 * e na linha 410 comentei o seguinte codigo
 *
 * Webflow.location = function (url) {
 *   window.location = url;
 * };
 *
 */

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preconnect" href={`${process.env.NEXT_PUBLIC_CMS_API_HOST}/`} />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/images/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#46494a" />
          <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#0b0c0e" />
          <meta name="msapplication-config" content="/images/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&display=swap"
            rel="stylesheet"
          ></link>
          <script
            src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
            type="text/javascript"
          ></script>
          <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
