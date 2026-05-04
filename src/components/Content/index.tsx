import { ReactNode } from 'react';

import { Container } from './styles';

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => <Container>{children}</Container>;

export default Content;
