import { css } from 'emotion'
import styled from 'react-emotion'

export const Container = styled('div')({
  background: '#333',
})

export const Content = styled('div')({
  margin: '0 auto',
  padding: 8,
  maxWidth: 960,
  textAlign: 'center',
})

const classes = {
  icon: css({
    color: 'white',
    margin: '0 8px',
  }),
}

export default classes
