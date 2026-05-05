import { HTMLProps, ReactNode } from 'react';
import { cn } from '#src/lib/utils';

type Props = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode;
};

const ExternalLink = ({ children, className, ...rest }: Props) => (
  <a
    {...rest}
    className={cn('text-primary no-underline hover:underline', className)}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ExternalLink;
