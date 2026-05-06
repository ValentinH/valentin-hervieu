import { createFileRoute } from '@tanstack/react-router';

import ExternalLink from '#src/components/ExternalLink';
import { Typography } from '#src/components/Typography';
import config from '#src/const/config';

export const Route = createFileRoute('/$')({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <>
      <Typography as="h1" variant="pageTitle" color="heading" className="mb-4">
        NOT FOUND
      </Typography>
      <Typography>
        This page doesn&apos;t exist. However, if you really need it, you can submit a PR{' '}
        <Typography as={ExternalLink} variant="body" color="primary" href={config.repository}>
          here
        </Typography>
        !
      </Typography>
    </>
  );
}
