import config from '#src/const/config';

import profilPic from './profile-2026.jpg';
import AppImage from '../AppImage';
import ExternalLink from '../ExternalLink';

const Intro = () => (
  <section className="flex items-start gap-4">
    <div className="w-[95px] shrink-0 rounded border border-solid border-[#ddd] bg-white p-[3px] shadow-[1px_1px_3px_#ccc] lg:w-[156px]">
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
      <h2 className="mb-4 mt-0">Welcome to my website!</h2>
      <p>
        I&apos;m <strong>Valentin Hervieu</strong> from France and I am in my thirties.
      </p>
      <p>
        I work as a Founding Product Engineer for{' '}
        <ExternalLink href="https://www.elba.security">elba</ExternalLink> from the French Riviera
        (Here&apos;s <ExternalLink href={config.linkedinUrl}>my résumé</ExternalLink>
        ). I enjoy making software and you can check{' '}
        <ExternalLink href={config.githubUrl}>my GitHub profile</ExternalLink> if you want to see my
        projects.
      </p>
    </div>
  </section>
);

export default Intro;
