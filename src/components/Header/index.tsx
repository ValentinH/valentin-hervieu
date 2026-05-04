import { Container, HeaderLink, Subtitle, Title } from './styles';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <Container>
    <Title>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </Title>
    <Subtitle>Passionate Product Engineer</Subtitle>
  </Container>
);

export default Header;
