import '@fontsource/alegreya-sans-sc/100.css';
import '@fontsource/alegreya-sans-sc/300.css';

import { Link } from '@tanstack/react-router';

import { cn } from '#src/lib/utils';

import styles from './styles.module.css';

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
    <h1 className="m-0 font-alegreya text-[40px] font-light leading-[40px] [text-shadow:2px_3px_1px_black] 2xl:text-[60px] 2xl:leading-[60px]">
      <Link className="text-white no-underline" to="/">
        {siteTitle}
      </Link>
    </h1>
    <h1 className="m-0 font-alegreya text-[18px] font-light [text-shadow:1px_2px_1px_black] lg:font-thin 2xl:text-[26px]">
      Passionate Product Engineer
    </h1>
  </header>
);

export default Header;
