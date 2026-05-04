import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import '@fontsource/alegreya-sans-sc/100.css'
import '@fontsource/alegreya-sans-sc/300.css'

const animatedBackground = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '50%': { transform: 'scale(1.2)' },
})

const fullHdMedia = '@media (min-width: 1400px)'
const backgroundRules = {
  backgroundColor: '#1B2030',
  backgroundImage: 'url(/background_600.webp)',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export const Container = styled('div')({
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30vw',
  minHeight: 180,
  maxHeight: 300,
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    backgroundImage: `
      radial-gradient(
        ellipse 54% 50% at 50% 50%,
        rgba(0, 0, 0, 0.52),
        rgba(0, 0, 0, 0.32) 38%,
        rgba(0, 0, 0, 0) 72%
      ),
      linear-gradient(
        to bottom,
        rgba(27, 32, 48, 0),
        rgba(27, 32, 48, 0.52)
      )
    `,
    backgroundPosition: 'center, bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%, 100% 36%',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'translateZ(0)',
    ...backgroundRules,
    animation: `${animatedBackground} 60s  linear 10ms infinite`,
    transition: 'all 0.2s ease-in-out',
    zIndex: -2,
    '@media (min-width: 700px)': {
      backgroundImage: 'url(/background_1400.webp)',
      backgroundPosition: 'center -40px',
    },
    '@media (min-width: 1300px)': {
      backgroundImage: 'url(/background_1920.webp)',
      backgroundPosition: 'center -80px',
    },
  },
})

export const Title = styled('h1')({
  margin: 0,
  fontFamily: "'Alegreya Sans SC'",
  fontWeight: 300,
  fontSize: 40,
  lineHeight: '40px',
  textShadow: `2px 3px 1px black`,
  [fullHdMedia]: {
    fontSize: 60,
    lineHeight: '60px',
  },
})

export const Subtitle = styled('h1')({
  margin: 0,
  fontFamily: "'Alegreya Sans SC'",
  fontWeight: 300,
  textShadow: `1px 2px 1px black`,
  fontSize: 18,
  '@media (min-width: 1024px)': {
    fontWeight: 100,
  },
  [fullHdMedia]: {
    fontSize: 26,
  },
})

const classes = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

export default classes
