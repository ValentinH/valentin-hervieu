import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '#src/const/config';

import ExternalLink from '../ExternalLink';

const links = [
  { name: 'Twitter', url: config.twitterUrl, icon: faTwitterSquare },
  { name: 'GitHub', url: config.githubUrl, icon: faGithubSquare },
  { name: 'LinkedIn', url: config.linkedinUrl, icon: faLinkedin },
];

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto flex max-w-screen-lg items-center justify-center p-1 text-center">
        {links.map((link) => (
          <ExternalLink key={link.name} className="h-5" href={link.url} title={link.name}>
            <FontAwesomeIcon
              className="mx-2 h-5 text-white transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
              icon={link.icon}
            />
          </ExternalLink>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
