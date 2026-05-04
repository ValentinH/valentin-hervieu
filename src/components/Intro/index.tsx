import config from '#src/const/config';

import profilPic from './profile-2026.jpg';
import { ImgWrapper, Title, Clearfix } from './styles';
import AppImage from '../AppImage';
import ExternalLink from '../ExternalLink';

const Intro = () => (
  <div>
    <ImgWrapper>
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
    </ImgWrapper>
    <Title>Welcome to my website!</Title>
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
    <Clearfix />
  </div>
);

export default Intro;
