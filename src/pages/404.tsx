import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

interface Four04Props {
  data: {
    site: {
      siteMetadata: {
        repository: string
      }
    }
  }
}

const NotFoundPage: React.SFC<Four04Props> = ({ data }) => (
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
