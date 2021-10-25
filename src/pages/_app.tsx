import '@fontsource/roboto'
import '../global.css'
import { AppProps } from 'next/app'
import * as React from 'react'
import Head from 'next/head'

import Analytics from '#src/components/Analytics'
import Header from '#src/components/Header'
import Content from '#src/components/Content'
import Footer from '#src/components/Footer'
import colors from '#src/components/../const/colors'
import config from '#src/const/config'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <html lang="en" />
      <title>{config.title}</title>
      <meta name="description" content="Personal website of Valentin Hervieu" />
      <meta name="keywords" content="Valentin, Hervieu, React, Frontend" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="theme-color" content={colors.primaryColor} />
    </Head>
    <Analytics />
    <Header siteTitle={config.title} />
    <Content>
      <Component {...pageProps} />
    </Content>
    <Footer />
  </>
)

export default MyApp
