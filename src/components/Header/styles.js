import { css } from 'emotion'
import styled from 'react-emotion'

export const Container = styled('div')({
  background: '#333',
})

export const Content = styled('div')({
  margin: '0 auto',
  padding: 24,
  maxWidth: 960,
  textAlign: 'center',
})

export const Title = styled('h1')({
  margin: 0,
})

const classes = {
  link: css({
    color: 'white',
    textDecoration: 'none',
  }),
}

export default classes
