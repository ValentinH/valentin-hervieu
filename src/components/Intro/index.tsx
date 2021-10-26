import Image from 'next/image'
import React from 'react'

import config from '#src/const/config'

import ExternalLink from '../ExternalLink'
import profilPic from './profil.jpg'
import { ImgWrapper, Title, Clearfix } from './styles'

function getAge(): number {
  const birthday = new Date('1991-03-21T02:00:00')
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const Intro = () => (
  <div>
    <ImgWrapper>
      <Image
        src={profilPic}
        alt="Valentin Hervieu"
        layout="responsive"
        priority
      />
    </ImgWrapper>
    <Title>Welcome to my website!</Title>
    <p>
      I&apos;m <strong>Valentin Hervieu</strong> from France and I&apos;m{' '}
      {getAge()} years old.
    </p>
    <p>
      I work as a principal front-end engineer for{' '}
      <ExternalLink href="https://ricardo.ch" title="Ricardo.ch">
        Ricardo.ch
      </ExternalLink>{' '}
      in Sophia-Antipolis, France (Here&apos;s{' '}
      <ExternalLink href={config.linkedinUrl}>my résumé</ExternalLink>
      ). I enjoy making software and you can check{' '}
      <ExternalLink href={config.githubUrl}>my GitHub profile</ExternalLink> if
      you want to see my projects.
    </p>
    <p>
      I&apos;m also available for freelancing and if you want to contact me,
      feel free to send me an email at{' '}
      <ExternalLink href={`mailto:${config.email}`} title="My email">
        valentin@hervi.eu
      </ExternalLink>
      .
    </p>
    <Clearfix />
  </div>
)

export default Intro
