import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const animatedBackground = keyframes({
  '0%': {
    transform: 'scale(1.)',
  },
  '50%': { transform: 'scale(1.2)' },
})

const imageUrl =
  'https://lh3.googleusercontent.com/Hp8x6n_OU61XP4sXNcVvm2wJwn9Q7VFfC-B5GBcGE3dYKqUVQIllzSbOW8YGTq09oUpfvLLhlbzkysKfFXff3-AoZMdKpLORW5bWDLGanQP3SuW-hQtoo6zPu79HikqAVWHh6RU-p_fqaUfozwQ3KJEM6LB1oZRZWzLIuME5-AGcgTZ4fUmi4YhyJdl3jUdljp5bAFCbv2IvBriiFEIlZrZVFmg1_koNiL3PujPMe9UEk-TOELgJIl_vsuQur0ixzk4vs4QpWp_7MRZQXAcdR3fcB1f_HUdv8lpLK7lA6haf46ZbTKoZspBJFrdBCZLpv9FY56naX_MDWuU_PDWf1mxWkdfT8-CIsKZ6iM4vkGhE-76i2vpwnCrT5jEcaPWhDscx1mGNkdZr9N1PnR-eSTLCviTnkD1zM0SsoCohiehQA4pf1pPJEO9ydU704wZlitEpea-_leJ7JgZvuC2UUctOnlyvEfvP2Y-IM5jm5OkaPQVswZ8n4Y_X10pmQ8fWqqGA_uyF2jnKZmOUC2AZPQarWIyl3-g2wGV3vVZIcx17Jd5sAaapIb9nXoj6OrKYyEdcN1dInANOhzd-ffIWGCxlCRKQ0BvofamSv0D5a9PDhCwz99HsoErf33hw7selM2mbOybzqvqcoE7MjBL3pIzjiCWo9DVmxeBJzF8VsbO5rqdGRDMK66CW5IniIFwg8TaFLsGXX5b2I8No7Jcu8-OtoQ'
const fullHdMedia = '@media (min-width: 1900px)'

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
    height: '40%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(27,32,48,1) 100%)',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'translateZ(0)',
    background: `#1B2030 url(${imageUrl}=w2000) top center no-repeat`,
    backgroundPositionY: -390,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    animation: `${animatedBackground} 60s  linear 10ms infinite`,
    transition: 'all 0.2s ease-in-out',
    zIndex: -2,
    '@media (min-width: 1024px)': {
      backgroundPositionY: 0,
    },
    [fullHdMedia]: {
      backgroundPositionY: -80,
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
  fontWeight: 100,
  textShadow: `1px 2px 1px black`,
  fontSize: 18,
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
