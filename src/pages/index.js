import React from 'react'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import WorkTimeline from '../components/WorkTimeline'
import Projects from '../components/Projects'
import Education from '../components/Education'
import ImagesGallery from '../components/ImagesGallery'

const IndexPage = () => (
  <Layout>
    <Intro />
    <WorkTimeline />
    <Projects />
    <Education />
    <ImagesGallery />
  </Layout>
)

export default IndexPage
