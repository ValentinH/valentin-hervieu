import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import config from '#src/const/config';

import { Container, Content, Icon, IconLink } from './styles';
import ExternalLink from '../ExternalLink';

const links = [
  { name: 'Twitter', url: config.twitterUrl, icon: faTwitterSquare },
  { name: 'Github', url: config.githubUrl, icon: faGithubSquare },
  { name: 'LinkedIn', url: config.linkedinUrl, icon: faLinkedin },
];

const Footer = () => {
  return (
    <Container>
      <Content>
        {links.map((link) => (
          <IconLink as={ExternalLink} key={link.name} href={link.url} title={link.name}>
            <Icon icon={link.icon} />
          </IconLink>
        ))}
      </Content>
    </Container>
  );
};

export default Footer;
