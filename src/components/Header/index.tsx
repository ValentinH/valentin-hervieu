import Link from 'next/link'
import React from 'react'

import classes, { Container, Subtitle, Title } from './styles'

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Container>
    <Title>
      <Link href="/" css={classes.link}>
        {siteTitle}
      </Link>
    </Title>
    <Subtitle>Passionate Front-end Engineer</Subtitle>
  </Container>
)

export default Header
