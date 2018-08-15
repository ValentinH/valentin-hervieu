import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from './favicon.png'

import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
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
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="Sample" />
          <meta name="keywords" content="sample, something" />
          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <Footer />
      </>
    )}
  </StaticQuery>
)

export default Layout
