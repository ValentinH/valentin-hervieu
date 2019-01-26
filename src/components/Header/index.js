/** @jsx jsx */
import { jsx } from '@emotion/core'
import Link from 'gatsby-link'

import classes, { Container, Content, Title } from './styles'

const Header = ({ siteTitle }) => (
  <Container>
    <Content>
      <Title>
        <Link to="/" css={classes.link}>
          {siteTitle}
        </Link>
      </Title>
    </Content>
  </Container>
)

export default Header
