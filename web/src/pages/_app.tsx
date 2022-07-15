import type { AppProps } from 'next/app'
import { CartProvider } from '../hooks/cart'
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </CartProvider>
  )
}

export default MyApp
