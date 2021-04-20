import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ReactFragment } from 'react'

import { GA_TRACKING_ID } from '../lib/gtag'

type GetInitialPropsResponse = {
  html: string
  head?: JSX.Element[]
  styles?: ReactFragment
}

class FEKDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<GetInitialPropsResponse> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="pl-PL">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default FEKDocument
