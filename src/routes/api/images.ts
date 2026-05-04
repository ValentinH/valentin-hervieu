import { createFileRoute } from '@tanstack/react-router';

import { getGalleryImages } from '#src/server/gallery-images';

export const Route = createFileRoute('/api/images')({
  server: {
    handlers: {
      GET: async () =>
        Response.json(await getGalleryImages(), {
          headers: {
            'Cache-Control': 'public, max-age=0, must-revalidate',
            'Vercel-CDN-Cache-Control': 'public, max-age=60, stale-while-revalidate=60',
          },
        }),
    },
  },
});
