import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import React from 'react'

import { getAlbum } from '#src/server/google-photos'

import Education from '../components/Education'
import ImagesGallery, { ImageType } from '../components/ImagesGallery'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import WorkTimeline from '../components/WorkTimeline'

export const getStaticProps: GetStaticProps = async () => {
  const album = await getAlbum('EAfoBb227eETnbLS9')
  const images = await Promise.all(
    album.map(async (url): Promise<ImageType> => {
      const original = `${url}=w4000`
      const thumbnail = `${url}=w100`
      const [
        { base64: originalPlaceholder },
        { base64: thumbnailPlaceholder },
      ] = await Promise.all([
        getPlaiceholder(original),
        getPlaiceholder(thumbnail),
      ])
      return {
        original,
        thumbnail,
        originalAlt: 'One photo I like',
        thumbnailAlt: 'Thumbnail of one photo I like',
        originalPlaceholder,
        thumbnailPlaceholder,
      }
    })
  )

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
