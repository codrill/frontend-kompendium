import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { SEO } from '../next-seo.config'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
