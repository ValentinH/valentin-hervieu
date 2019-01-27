import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from './favicon.png'

import Analytics from '../Analytics'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
import colors from '../../const/colors.json'
import './index.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
  >
    {data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="Sample" />
          <meta name="keywords" content="sample, something" />
          <link rel="icon" type="image/png" href={favicon} />
          <meta name="theme-color" content={colors.primaryColor} />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
            rel="stylesheet"
            async
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lobster+Two:700&text=Valentin%20Hervieu"
            rel="stylesheet"
            async
          />

          <script async defer src="https://buttons.github.io/buttons.js" />
        </Helmet>
        <Analytics />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <Footer />
      </>
    )}
  </StaticQuery>
)

export default Layout
