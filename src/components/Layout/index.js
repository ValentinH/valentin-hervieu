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
