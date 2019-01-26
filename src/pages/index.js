import React from 'react'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import WorkTimeline from '../components/WorkTimeline'
import Projects from '../components/Projects'
import Education from '../components/Education'

const IndexPage = () => (
  <Layout>
    <Intro />
    <WorkTimeline />
    <Projects />
    <Education />
  </Layout>
)

export default IndexPage
