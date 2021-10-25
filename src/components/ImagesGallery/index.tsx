import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Rect from '@reach/rect'
import { ClassNames } from '@emotion/react'

type Props = {
  images?: ReactImageGalleryItem[]
}
const ImagesGallery = ({ images }: Props) => {
  if (!images) return null

  return (
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
  )
}

export default ImagesGallery
