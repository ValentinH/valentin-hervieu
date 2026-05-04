import { createFileRoute } from '@tanstack/react-router';

import config from '#src/const/config';

export const Route = createFileRoute('/$')({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <>
      <h1>NOT FOUND</h1>
      <p>
        This page doesn&apos;t exist. However, if you really need it, you can submit a PR{' '}
        <a href={config.repository}>here</a>!
      </p>
    </>
  );
}
