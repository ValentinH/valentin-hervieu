import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Image from 'next/image'

type Props = {
  images?: ReactImageGalleryItem[]
}

const ImagesGallery = ({ images }: Props) => {
  if (!images) return null

  return (
    <div>
      <h2>Some pictures from my camera</h2>
      <ImageGallery
        items={images.map(img => ({
          ...img,
        }))}
        showFullscreenButton={false}
        renderItem={item =>
          item.original && (
            <div
              css={{
                paddingBottom: '56.25%', // 16/9 ratio
                background: '#121212',
                position: 'relative',
              }}
            >
              <Image
                src={item.original}
                layout="fill"
                priority={item === images[0]}
                alt={item.originalAlt}
              />
            </div>
          )
        }
        renderThumbInner={item =>
          item.thumbnail && (
            <Image
              src={item.thumbnail}
              width={92}
              height={52}
              alt={item.thumbnailAlt}
            />
          )
        }
      />
    </div>
  )
}

export default ImagesGallery
