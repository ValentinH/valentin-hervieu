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
        sizes="30vw"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
        priority
        placeholder="blur"
      />
    </ImgWrapper>
    <Title>Welcome to my website!</Title>
    <p>
      I&apos;m <strong>Valentin Hervieu</strong> from France and I&apos;m{' '}
      {getAge()} years old.
    </p>
    <p>
      I work as a lead frontend engineer for{' '}
      <ExternalLink href="https://www.elba.security">elba</ExternalLink> from
      the French Riviera (Here&apos;s{' '}
      <ExternalLink href={config.linkedinUrl}>my résumé</ExternalLink>
      ). I enjoy making software and you can check{' '}
      <ExternalLink href={config.githubUrl}>my GitHub profile</ExternalLink> if
      you want to see my projects.
    </p>
    <Clearfix />
  </div>
)

export default Intro
