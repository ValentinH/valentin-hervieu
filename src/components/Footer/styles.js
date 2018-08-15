import { css } from 'emotion'
import styled from 'react-emotion'

export const Container = styled('div')({
  background: '#004a5d',
})

export const Content = styled('div')({
  margin: '0 auto',
  padding: 4,
  maxWidth: 960,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const classes = {
  icon: css({
    color: 'white',
    margin: '0 8px',
    fontSize: 20,
    transition: 'transform 500ms ease-in-out',
    ':hover': {
      transform: 'rotateZ(360deg)',
    },
  }),
  iconLink: css({
    height: 20,
  }),
}

export default classes
