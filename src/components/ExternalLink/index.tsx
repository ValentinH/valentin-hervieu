import { HTMLProps, ReactNode } from 'react';

import { Link } from './styles';

type Props = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode;
};

const ExternalLink = ({ children, ...rest }: Props) => (
  <Link {...rest} as={undefined} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export default ExternalLink;
