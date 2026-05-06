import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '#src/lib/utils';

type Props = ComponentPropsWithoutRef<'a'>;

const ExternalLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...rest }, ref) => (
    <a
      ref={ref}
      {...rest}
      className={cn('no-underline hover:underline', className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
);

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
