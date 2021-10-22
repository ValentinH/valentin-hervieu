import React from 'react'
import Link from 'next/link'
import classes, { Container, Subtitle, Title } from './styles'

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Container>
    <Title>
      <Link href="/">
        <a css={classes.link}>{siteTitle}</a>
      </Link>
    </Title>
    <Subtitle>Passionate Front-end Engineer</Subtitle>
  </Container>
)

export default Header
