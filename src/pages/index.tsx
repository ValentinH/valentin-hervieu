import React from 'react'
import Intro from '../components/Intro'
import WorkTimeline from '../components/WorkTimeline'
import Projects from '../components/Projects'
import Education from '../components/Education'
import ImagesGallery from '../components/ImagesGallery'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAlbum } from '#src/server/google-photos'
import { ReactImageGalleryItem } from 'react-image-gallery'

export const getStaticProps: GetStaticProps = async () => {
  const album = await getAlbum('EAfoBb227eETnbLS9')
  const images = album.map<ReactImageGalleryItem>(url => ({
    original: `${url}=w1024`,
    thumbnail: `${url}=w100`,
    srcSet: `${url}=w1024 1024w,
  ${url}=w2048 2048w,
  ${url}=w800 800w`,
    sizes: `(min-width: 1024px) 1024px,
  (min-width: 2048px) 2048px,
  800px`,
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
