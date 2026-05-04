import 'react-image-gallery/styles/image-gallery.css';
import { ClassNames } from '@emotion/react';
import React from 'react';
import ImageGallery from 'react-image-gallery';

import { GalleryImage } from '#src/types/images';

import AppImage from '../AppImage';

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
              original: item.src,
              thumbnail: item.src,
              renderItem: () =>
                item.src && (
                  <div
                    css={{
                      paddingBottom: '56.25%', // 16/9 ratio
                      background: '#121212',
                      position: 'relative',
                    }}
                  >
                    <AppImage
                      src={item.src}
                      alt={item.alt}
                      layout="fullWidth"
                      aspectRatio={16 / 9}
                      breakpoints={[320, 640, 960, 1280, 1600, 1920]}
                      objectFit="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        inset: 0,
                      }}
                    />
                  </div>
                ),
              renderThumbInner: () =>
                item.src && (
                  <AppImage
                    src={item.src}
                    width={92}
                    height={55}
                    layout="fixed"
                    breakpoints={[92, 184]}
                    alt={item.thumbnailAlt || ''}
                    objectFit="cover"
                    style={{
                      display: 'block',
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
