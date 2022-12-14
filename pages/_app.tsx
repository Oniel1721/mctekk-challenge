import '../styles/globals.css'
import '../styles/user.css'
import '../styles/login.css'
import '../styles/form.css'
import '../styles/input.css'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
