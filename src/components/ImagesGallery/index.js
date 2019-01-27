import React from 'react'
import axios from 'axios'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import * as Sentry from '@sentry/browser'

class ImagesGallery extends React.Component {
  state = {
    images: null,
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://google-photos-album.glitch.me/?id=EAfoBb227eETnbLS9'
      )
      if (response && response.data && response.data.length > 0) {
        this.setState({
          images: response.data.map(url => ({
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
      <div>
        <h2>Some pictures from my camera</h2>
        <ImageGallery items={images} lazyLoad />
      </div>
    ) : null
  }
}

export default ImagesGallery
