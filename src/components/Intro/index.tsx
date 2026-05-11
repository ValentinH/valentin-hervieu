import config from '#src/const/config';

import profilPic from './profile-2026.jpg';
import AppImage from '../AppImage';
import ExternalLink from '../ExternalLink';
import { Typography } from '../Typography';

const Intro = () => (
  <section className="grid gap-6 sm:mt-8 md:grid-cols-[156px_minmax(0,48rem)] md:items-start md:gap-8">
    <div className="mx-auto w-[156px] rounded-lg border border-solid border-black/10 bg-white p-1 ring-1 ring-white/80 md:mx-0">
      <AppImage
        src={profilPic}
        alt="Valentin Hervieu"
        width={156}
        height={156}
        layout="constrained"
        breakpoints={[92, 184, 320]}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </div>
    <div className="max-w-3xl">
      <Typography as="h2" variant="sectionTitle" color="heading" className="mb-2">
        Hi 👋
      </Typography>
      <Typography className="mb-3">
        I&apos;m Valentin, a Product Engineer with 12+ years of experience working to build the
        right things right.
      </Typography>
      <Typography className="mb-3">
        I mostly work with TypeScript, React, AI systems, and pragmatic architecture. I like taking
        vague product ideas and turning them into fast, reliable software, from the data model and
        UI details to rollouts, monitoring, and analytics.
      </Typography>
      <Typography>
        I also maintain open-source projects used by thousands of developers, including React/Svelte
        components and developer tooling. You can find my projects on{' '}
        <Typography as={ExternalLink} variant="body" color="primary" href={config.githubUrl}>
          GitHub
        </Typography>{' '}
        and more background on{' '}
        <Typography as={ExternalLink} variant="body" color="primary" href={config.linkedinUrl}>
          LinkedIn
        </Typography>
        .
      </Typography>
    </div>
  </section>
);

export default Intro;
