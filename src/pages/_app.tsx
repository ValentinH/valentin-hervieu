import '@fontsource/roboto'
import '../global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import ReactGA from 'react-ga'

import Content from '#src/components/Content'
import Footer from '#src/components/Footer'
import Header from '#src/components/Header'
import config from '#src/const/config'

import colors from '#src/components/../const/colors'


const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    ReactGA.initialize('UA-40453888-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta
          name="description"
          content="Personal website of Valentin Hervieu"
        />
        <meta name="keywords" content="Valentin, Hervieu, React, Frontend" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content={colors.primaryColor} />
      </Head>
      <Header siteTitle={config.title} />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  )
}
export default MyApp
