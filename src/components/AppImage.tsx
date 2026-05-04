import { Image as BaseImage } from '@unpic/react/base';
import type { ImageProps as BaseImageProps } from '@unpic/react/base';
import type { CSSProperties } from 'react';
import type { Operations, TransformerFunction } from 'unpic';
import { transform as vercelTransform } from 'unpic/providers/vercel';
import type { VercelOperations, VercelOptions } from 'unpic/providers/vercel';

export const imageWidths = [92, 184, 320, 640, 960, 1280, 1600, 1920];

export const imageQuality = 75;

type AppImageProps = Omit<
  BaseImageProps<Operations, undefined>,
  'transformer' | 'operations' | 'options'
> & {
  style?: CSSProperties;
};

const directTransform: TransformerFunction<Operations, undefined> = (src) => src.toString();

const vercelOptions = {
  prefix: '_vercel',
  force: true,
} satisfies VercelOptions;

const vercelOperations = {
  quality: imageQuality,
} satisfies VercelOperations;

const AppImage = ({ breakpoints = imageWidths, ...props }: AppImageProps) => {
  if (import.meta.env.VERCEL) {
    const imageProps = {
      ...props,
      breakpoints,
      transformer: vercelTransform,
      operations: vercelOperations,
      options: vercelOptions,
    } as BaseImageProps<VercelOperations, VercelOptions>;

    return <BaseImage {...imageProps} />;
  }

  const imageProps = {
    ...props,
    breakpoints,
    transformer: directTransform,
  } as BaseImageProps<Operations, undefined>;

  return <BaseImage {...imageProps} />;
};

export default AppImage;
