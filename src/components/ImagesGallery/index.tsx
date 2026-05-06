import 'react-image-gallery/styles/image-gallery.css';
import React from 'react';
import ImageGallery from 'react-image-gallery';

import { GalleryImage } from '#src/types/images';

import AppImage from '../AppImage';
import { Typography } from '../Typography';

const emptyImages: GalleryImage[] = [];

const ImagesGallery = () => {
  const { images, isLoading } = useGalleryImages();

  return (
    <section>
      <Typography as="h2" variant="sectionTitle" color="heading" className="mb-4">
        Some pictures from my camera
      </Typography>
      {isLoading ? (
        <ImagesGallerySkeleton />
      ) : (
        images.length > 0 && (
          <ImageGallery
            items={images.map((item) => ({
              original: item.src,
              thumbnail: item.src,
              renderItem: () =>
                item.src && (
                  <div className="relative bg-[#121212] pb-[56.25%]">
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
            additionalClass="[&_.image-gallery-thumbnail]:inline-flex [&_.image-gallery-thumbnail]:overflow-hidden"
          />
        )
      )}
    </section>
  );
};

function ImagesGallerySkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading camera pictures">
      <div className="relative bg-neutral-300 pb-[56.25%] animate-pulse" />
    </div>
  );
}

function useGalleryImages() {
  const [images, setImages] = React.useState(emptyImages);
  const [isLoading, setIsLoading] = React.useState(true);

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

    fetchImages()
      .catch(() => undefined)
      .finally(() => {
        if (shouldUpdate) {
          setIsLoading(false);
        }
      });

    return () => {
      shouldUpdate = false;
    };
  }, []);

  return { images, isLoading };
}

export default ImagesGallery;
