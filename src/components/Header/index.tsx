import { Link } from '@tanstack/react-router';

import { imageQuality } from '#src/components/AppImage';
import { cn } from '#src/lib/utils';

import styles from './styles.module.css';
import { Typography } from '../Typography';
import backgroundImage from './background.jpg';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <header
    className={cn(
      styles.siteHeader,
      'relative flex h-[30vw] max-h-[300px] min-h-[180px] overflow-hidden bg-header text-white',
    )}
  >
    <img
      src={backgroundImage}
      srcSet={getHeaderImageSrcSet(backgroundImage)}
      sizes="100vw"
      alt=""
      width={4000}
      height={2250}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      aria-hidden="true"
      className={styles.backgroundImage}
    />
    <div className="relative z-10 mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-4 text-center">
      <Typography as="h1" variant="heroTitle" color="white">
        <Link className="text-white no-underline" to="/">
          {siteTitle}
        </Link>
      </Typography>
      <Typography as="p" variant="heroSubtitle" color="white">
        Passionate Product Engineer
      </Typography>
    </div>
  </header>
);

export default Header;

const headerImageWidths = [640, 828, 1080, 1200, 1600, 1920, 2560, 3200, 3840];

function getHeaderImageSrcSet(src: string) {
  return headerImageWidths.map((width) => `${getHeaderImageSrc(src, width)} ${width}w`).join(', ');
}

function getHeaderImageSrc(src: string, width: number) {
  if (!import.meta.env.VERCEL) return src;

  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${imageQuality}`;
}
