import 'react-image-gallery/styles/image-gallery.css';
import { ClassNames } from '@emotion/react';
import React from 'react';
import ImageGallery from 'react-image-gallery';

import { GalleryImage } from '#src/types/images';

const emptyImages: GalleryImage[] = [];

const ImagesGallery = () => {
  const images = useGalleryImages();

  if (!images.length) return null;

  return (
    <div>
      <h2>Some pictures from my camera</h2>
      <ClassNames>
        {({ css }) => (
          <ImageGallery
            items={images.map((item) => ({
              ...item,
              renderItem: () =>
                item.original && (
                  <div
                    css={{
                      paddingBottom: '56.25%', // 16/9 ratio
                      background: '#121212',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={item.original}
                      alt={item.originalAlt || ''}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        position: 'absolute',
                        inset: 0,
                      }}
                    />
                  </div>
                ),
              renderThumbInner: () =>
                item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    width={92}
                    height={55}
                    alt={item.thumbnailAlt || ''}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                ),
            }))}
            showFullscreenButton={false}
            additionalClass={css({
              '& .image-gallery-thumbnail': {
                display: 'inline-flex',
              },
            })}
          />
        )}
      </ClassNames>
    </div>
  );
};

function useGalleryImages() {
  const [images, setImages] = React.useState(emptyImages);

  React.useEffect(() => {
    let shouldUpdate = true;

    async function fetchImages() {
      const response = await fetch('/api/images');

      if (!response.ok) return;

      const nextImages = (await response.json()) as GalleryImage[];

      if (shouldUpdate) {
        setImages(nextImages);
      }
    }

    fetchImages().catch(() => undefined);

    return () => {
      shouldUpdate = false;
    };
  }, []);

  return images;
}

export default ImagesGallery;
