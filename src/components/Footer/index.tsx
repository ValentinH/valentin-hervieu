import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import config from '#src/const/config'

import ExternalLink from '../ExternalLink'
import classes, { Container, Content } from './styles'

const links = [
  { name: 'Twitter', url: config.twitterUrl, icon: faTwitterSquare },
  { name: 'Github', url: config.githubUrl, icon: faGithubSquare },
  { name: 'LinkedIn', url: config.linkedinUrl, icon: faLinkedin },
]

const Footer = () => {
  return (
    <Container>
      <Content>
        {links.map((link) => (
          <ExternalLink
            key={link.name}
            href={link.url}
            title={link.name}
            css={classes.iconLink}
          >
            <FontAwesomeIcon css={classes.icon} icon={link.icon} />
          </ExternalLink>
        ))}
      </Content>
    </Container>
  )
}

export default Footer
