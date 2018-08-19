import styled from 'react-emotion'

export const Container = styled('div')({
  maxWidth: 960,
  minHeight: `calc(100vh - ${88 + 28}px)`, // header + footer height
  margin: '0 auto',
  padding: 16,
})
