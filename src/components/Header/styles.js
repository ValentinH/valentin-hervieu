import styled from '@emotion/styled'
import colors from '../../const/colors.json'

export const Container = styled('div')({
  background: colors.primaryColor,
  backgroundImage: `linear-gradient(to right bottom, ${
    colors.primaryColor
  }, #0079b4, #0083b2, #158caf, #3494ac)`,
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
