/** @jsx jsx */
import { jsx } from '@emotion/core'
import Link from 'gatsby-link'
import classes, { Container, Subtitle, Title } from './styles'

jsx // hack for jsx to be included

interface Props {
  siteTitle: string
}

const Header: React.SFC<Props> = ({ siteTitle }) => (
  <Container>
    <Title>
      <Link to="/" css={classes.link}>
        {siteTitle}
      </Link>
    </Title>
    <Subtitle>Senior Front-end Engineer</Subtitle>
  </Container>
)

export default Header
