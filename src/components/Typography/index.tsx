import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '#src/lib/utils';

import { forwardRefWithAs, type ComponentPropsWithAs } from './polymorphism';

const typographyCva = cva('m-0 font-inter tracking-normal', {
  variants: {
    variant: {
      heroTitle:
        'text-[40px] font-extralight leading-[40px] [text-shadow:2px_3px_1px_black] 2xl:text-[60px] 2xl:leading-[60px]',
      heroSubtitle:
        'text-[18px] font-thin leading-normal [text-shadow:1px_2px_1px_black] 2xl:text-[26px]',
      pageTitle: 'text-[32px] font-medium leading-tight',
      sectionTitle: 'text-[24px] font-medium leading-normal',
      title: 'text-[20px] font-medium leading-tight',
      body: 'text-[16px] font-normal leading-[1.55]',
      bodyStrong: 'text-[16px] font-medium leading-snug',
      caption: 'text-[14px] font-normal leading-[1.5]',
      captionStrong: 'text-[14px] font-medium leading-normal',
      meta: 'text-[12px] font-normal italic leading-normal',
    },
    color: {
      inherit: 'text-inherit',
      heading: 'text-stone-950',
      body: 'text-stone-900',
      muted: 'text-stone-600',
      primary: 'text-primary',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'body',
  },
});

export type TypographyVariant = NonNullable<VariantProps<typeof typographyCva>['variant']>;
export type TypographyColor = NonNullable<VariantProps<typeof typographyCva>['color']>;
export type TypographyProps = ComponentPropsWithAs<'p'> & VariantProps<typeof typographyCva>;

export const Typography = forwardRefWithAs<TypographyProps, 'p'>(
  ({ children, variant, color, className, as: Component = 'p', ...rest }, ref) => {
    return (
      <Component ref={ref} {...rest} className={cn(typographyCva({ variant, color }), className)}>
        {children}
      </Component>
    );
  },
);

Typography.displayName = 'Typography';
