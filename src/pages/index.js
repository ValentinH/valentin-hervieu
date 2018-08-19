import React from 'react'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import WorkTimeline from '../components/WorkTimeline'

const IndexPage = () => (
  <Layout>
    <Intro />
    <WorkTimeline />
    <Intro />
  </Layout>
)

export default IndexPage
