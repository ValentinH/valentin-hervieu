import { GalleryImage } from '#src/types/images';

import { getAlbum } from './google-photos';

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const album = await getAlbum('EAfoBb227eETnbLS9');

  return Promise.all(album.map(getGalleryImage));
}

async function getGalleryImage(url: string): Promise<GalleryImage> {
  return {
    src: `${url}=w4000`,
    alt: 'One photo I like',
    thumbnailAlt: 'Thumbnail of one photo I like',
  };
}
