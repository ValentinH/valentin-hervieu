import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ExternalLink from '../ExternalLink'
import { Img, Title, Clearfix } from './styles'
import profilPic from './profil.jpg'

const Intro = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            linkedinUrl
            githubUrl
            email
          }
        }
      }
    `}
  >
    {data => (
      <div>
        <Img src={profilPic} alt="Valentin Hervieu" />
        <Title>Welcome to my website!</Title>
        <p>
          I&apos;m <strong>Valentin Hervieu</strong> from France and I&apos;m{' '}
          {getAge()} years old.
        </p>
        <p>
          I work as a senior front-end engineer for{' '}
          <ExternalLink href="https://ricardo.ch" title="Ricardo.ch">
            Ricardo.ch
          </ExternalLink>{' '}
          in Sophia-Antipolis, France (Here&apos;s{' '}
          <ExternalLink href={data.site.siteMetadata.linkedinUrl}>
            my résumé
          </ExternalLink>
          ). I enjoy making software and you can check{' '}
          <ExternalLink href={data.site.siteMetadata.githubUrl}>
            my GitHub profile
          </ExternalLink>{' '}
          if you want to see my work.
        </p>
        <p>
          I&apos;m also available for freelancing and if you want to contact me,
          feel free to send me an email{' '}
          <ExternalLink href={`mailto:${data.site.siteMetadata.email}`}>
            here
          </ExternalLink>
          .
        </p>
        <Clearfix />
      </div>
    )}
  </StaticQuery>
)

function getAge() {
  const birthday = new Date('1991-03-21T02:00:00')
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export default Intro
