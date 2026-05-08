import config from '#src/const/config';

import profilPic from './profile-2026.jpg';
import AppImage from '../AppImage';
import ExternalLink from '../ExternalLink';
import { Typography } from '../Typography';

const Intro = () => (
  <section className="flow-root sm:mt-8">
    <div className="mx-auto mb-2 w-[156px] rounded border border-solid border-[#ddd] bg-white p-[3px] shadow-[1px_1px_3px_#ccc] sm:float-left sm:mb-2 sm:mr-2 sm:w-[95px] lg:mr-6 lg:w-[156px]">
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
    <div>
      <Typography as="h2" variant="sectionTitle" color="heading" className="mb-2">
        Hi 👋
      </Typography>
      <Typography className="mb-2">
        I&apos;m Valentin, a Product Engineer with 12+ years of experience working to
        build the right things right.
      </Typography>
      <Typography className="mb-2">
        My strongest work sits at the intersection of product craft, TypeScript/React, AI systems,
        workflow automation, and pragmatic architecture. I like turning ambiguous product ideas into
        fast, polished, reliable software: data model, backend workflows, UI details, rollout,
        analytics, and long-term maintenance.
      </Typography>
      <Typography className="mb-2">
        I care about the full product loop: understanding the user problem, shaping the solution,
        building with taste, handling production realities, measuring what matters, and cleaning up
        the old path once the new one works.
      </Typography>
      <Typography className="mb-2">
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
