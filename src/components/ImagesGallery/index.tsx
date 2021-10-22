import React from 'react'
import axios from 'axios'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import * as Sentry from '@sentry/browser'
import Rect from '@reach/rect'
import { ClassNames } from '@emotion/react'

interface State {
  images?: ReactImageGalleryItem[]
}

class ImagesGallery extends React.Component<{}, State> {
  state: State = {
    images: null,
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://hbf801bpi8.execute-api.eu-west-3.amazonaws.com/production?id=EAfoBb227eETnbLS9'
      )
      if (response && response.data && response.data.length > 0) {
        this.setState({
          images: response.data.map((url: string) => ({
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
          })),
        })
      } else {
        Sentry.captureException(new Error('Images gallery is empty'))
      }
    } catch (error) {
      Sentry.captureException(error)
    }
  }

  render() {
    const { images } = this.state
    return images ? (
      <Rect>
        {({ rect, ref }) => (
          <ClassNames>
            {({ css }) => {
              const height = rect ? (rect.width * 9) / 16 : undefined
              return (
                <div ref={ref}>
                  <h2>Some pictures from my camera</h2>
                  <ImageGallery
                    items={images.map(img => ({
                      ...img,
                      originalClass: css({
                        minHeight: height,
                        background: '#121212',
                      }),
                    }))}
                    lazyLoad
                  />
                </div>
              )
            }}
          </ClassNames>
        )}
      </Rect>
    ) : null
  }
}

export default ImagesGallery
