import React from 'react'
import axios from 'axios'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import Loader from 'react-loader-spinner'
import colors from '../../const/colors.json'
import { LoaderWrapper } from './styles'

class ImagesGallery extends React.Component {
  state = {
    images: null,
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://google-photos-album.glitch.me/?id=EAfoBb227eETnbLS9'
    )
    if (response && response.data) {
      this.setState({
        images: response.data.map(url => ({
          original: `${url}=w1600`,
          thumbnail: `${url}=w200`,
          originalAlt: 'One photo I like',
          thumbnailAlt: 'Thumbnail of one photo I like',
        })),
      })
    }
  }

  render() {
    const { images } = this.state
    return (
      <div>
        <h2>Some pictures I took</h2>
        {images ? (
          <ImageGallery items={images} lazyLoad />
        ) : (
          <LoaderWrapper>
            <Loader
              type="Bars"
              color={colors.primaryColor}
              height="64"
              width="64"
            />
          </LoaderWrapper>
        )}
      </div>
    )
  }
}

export default ImagesGallery
