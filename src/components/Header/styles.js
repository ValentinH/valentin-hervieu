import styled from '@emotion/styled'

const background = '#022748'

export const Container = styled('div')({
  background,
  backgroundImage: `linear-gradient(120deg, ${background} 0%, #022f52 25%, #03375d 47%, #1b6584 75%, #3494ac 100%)`,
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
  textShadow: `5px 5px 1px ${background}`,
})

const classes = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

export default classes
