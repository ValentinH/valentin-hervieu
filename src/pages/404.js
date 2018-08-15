import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = ({ data }) => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      This page doesn&apos;t exist. However, if you really need it, you can
      submit a PR <a href={data.site.siteMetadata.repository}>here</a>!
    </p>
  </Layout>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        repository
      }
    }
  }
`

export default NotFoundPage
