import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

import { firebaseConfig } from '../firebase'
import { SEO } from '../next-seo.config'

import '../styles/globals.scss'

if (process.env.NEXT_PUBLIC_ANALYTICS === 'enabled') {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null))
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
