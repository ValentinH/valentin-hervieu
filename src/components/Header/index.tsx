import { Link } from '@tanstack/react-router';

import { cn } from '#src/lib/utils';

import styles from './styles.module.css';
import { Typography } from '../Typography';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <header
    className={cn(
      styles.siteHeader,
      'relative z-0 flex h-[30vw] max-h-[300px] min-h-[180px] flex-col items-center justify-center overflow-hidden text-white',
    )}
  >
    <Typography as="h1" variant="heroTitle" color="white" className="text-center">
      <Link className="text-white no-underline" to="/">
        {siteTitle}
      </Link>
    </Typography>
    <Typography as="p" variant="heroSubtitle" color="white">
      Passionate Product Engineer
    </Typography>
  </header>
);

export default Header;
