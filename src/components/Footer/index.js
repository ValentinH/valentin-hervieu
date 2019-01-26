/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { StaticQuery, graphql } from 'gatsby'
import ExternalLink from '../ExternalLink'

import classes, { Container, Content } from './styles'

const Footer = ({ data }) => {
  const links = [
    { name: 'Twitter', url: data.twitterUrl, icon: faTwitterSquare },
    { name: 'Github', url: data.githubUrl, icon: faGithubSquare },
    { name: 'LinkedIn', url: data.linkedinUrl, icon: faLinkedin },
  ]

  return (
    <Container>
      <Content>
        {links.map(link => (
          <ExternalLink
            key={link.name}
            href={link.url}
            title={link.name}
            className={classes.iconLink}
          >
            <FontAwesomeIcon css={classes.icon} icon={link.icon} />
          </ExternalLink>
        ))}
      </Content>
    </Container>
  )
}

const FooterWithData = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            githubUrl
            linkedinUrl
            twitterUrl
          }
        }
      }
    `}
  >
    {data => <Footer data={data.site.siteMetadata} />}
  </StaticQuery>
)

export default FooterWithData
