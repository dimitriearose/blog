import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"

import router from 'next/router'
import NProgress from 'nprogress'

import GlobalStyle from '../styles/Global'
import '../styles/nprogress.css'


router.events.on('routeChangeStart',() => {
  NProgress.start()
})


router.events.on('routeChangeComplete',() => {
  NProgress.done()
  
})


router.events.on('routeChangeError',() => {
  NProgress.remove()
  
})



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
 
}
export default MyApp
