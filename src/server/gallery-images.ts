import { GalleryImage } from '#src/types/images';

import { getAlbum } from './google-photos';

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const album = await getAlbum('EAfoBb227eETnbLS9');

  return Promise.all(album.map(getGalleryImage));
}

async function getGalleryImage(url: string): Promise<GalleryImage> {
  const original = `${url}=w4000`;
  const thumbnail = `${url}=w100`;

  return {
    original,
    thumbnail,
    originalAlt: 'One photo I like',
    thumbnailAlt: 'Thumbnail of one photo I like',
  };
}
