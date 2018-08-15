import React from 'react'
import Link from 'gatsby-link'

import classes, { Container, Content, Title } from './styles'

const Header = ({ siteTitle }) => (
  <Container>
    <Content>
      <Title>
        <Link to="/" className={classes.link}>
          {siteTitle}
        </Link>
      </Title>
    </Content>
  </Container>
)

export default Header
