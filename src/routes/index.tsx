import { createFileRoute } from '@tanstack/react-router';

import ImagesGallery from '#src/components/ImagesGallery';
import Intro from '#src/components/Intro';
import Projects from '#src/components/Projects';
import WorkTimeline from '#src/components/WorkTimeline';

export const Route = createFileRoute('/')({
  component: IndexPage,
  headers: () => ({
    'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    'Vercel-CDN-Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
  }),
});

function IndexPage() {
  return (
    <>
      <Intro />
      <WorkTimeline />
      <Projects />
      <ImagesGallery />
    </>
  );
}
