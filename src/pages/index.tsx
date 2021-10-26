import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { ReactImageGalleryItem } from 'react-image-gallery'

import { getAlbum } from '#src/server/google-photos'

import Education from '../components/Education'
import ImagesGallery from '../components/ImagesGallery'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import WorkTimeline from '../components/WorkTimeline'



export const getStaticProps: GetStaticProps = async () => {
  const album = await getAlbum('EAfoBb227eETnbLS9')
  const images = album.map<ReactImageGalleryItem>((url) => ({
    original: `${url}=w4000`,
    thumbnail: `${url}=w100`,
    originalAlt: 'One photo I like',
    thumbnailAlt: 'Thumbnail of one photo I like',
  }))

  return {
    props: {
      images,
    },
    revalidate: 60, // In seconds
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>
const IndexPage = ({ images }: Props) => (
  <>
    <Intro />
    <WorkTimeline />
    <Projects />
    <Education />
    <ImagesGallery images={images} />
  </>
)

export default IndexPage
