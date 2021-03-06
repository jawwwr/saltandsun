import '../styles/globals.scss'
import '../styles/helper.scss'
import '../styles/theme.scss'
import '../styles/shop.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
