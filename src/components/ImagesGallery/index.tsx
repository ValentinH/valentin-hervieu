import 'react-image-gallery/styles/css/image-gallery.css'
import { ClassNames } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'

type Props = {
  images?: ReactImageGalleryItem[]
}

const ImagesGallery = ({ images }: Props) => {
  if (!images) return null

  return (
    <div>
      <h2>Some pictures from my camera</h2>
      <ClassNames>
        {({ css }) => (
          <ImageGallery
            items={images.map((img) => ({
              ...img,
            }))}
            showFullscreenButton={false}
            additionalClass={css({
              '& .image-gallery-thumbnail': {
                display: 'inline-flex',
              },
            })}
            renderItem={(item) =>
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
            renderThumbInner={(item) =>
              item.thumbnail && (
                <Image
                  src={item.thumbnail}
                  width={92}
                  height={55}
                  alt={item.thumbnailAlt}
                />
              )
            }
          />
        )}
      </ClassNames>
    </div>
  )
}

export default ImagesGallery
