import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import colors from '../../const/colors.json'

const animatedBackground = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

export const Container = styled('div')({
  background: colors.primaryColor,
  backgroundImage: `linear-gradient(246deg, ${colors.primaryColor}, #1ec0e9, ${
    colors.primaryColor
  })`,
  backgroundSize: '300% 300%',
  animation: `${animatedBackground} 25s linear infinite`,
})

export const Content = styled('div')({
  margin: '0 auto',
  padding: 24,
  maxWidth: 960,
  textAlign: 'center',
})

export const Title = styled('h1')({
  margin: 0,
  fontFamily: "'Lobster Two', cursive",
  fontSize: 40,
  lineHeight: '40px',
  textShadow: `5px 5px 1px ${colors.primaryColor}`,
})

const classes = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

export default classes
