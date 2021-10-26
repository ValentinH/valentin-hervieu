import styled from '@emotion/styled'
import colors from '../../const/colors'

export const Container = styled('div')({
  background: colors.primaryColor,
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
  icon: {
    color: 'white',
    margin: '0 8px',
    height: 20,
    transition: 'transform 500ms ease-in-out',
    ':hover': {
      transform: 'rotateZ(360deg)',
    },
  },
  iconLink: {
    height: 20,
  },
}

export default classes
