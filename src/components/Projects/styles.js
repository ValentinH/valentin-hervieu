import styled from '@emotion/styled'

export const Content = styled('div')({
  display: 'grid',
  gridColumnGap: 32,
  gridRowGap: 24,
  marginBottom: 24,
  '@media (min-width: 960px)': {
    gridTemplateColumns: '1fr 1fr',
  },
})

export const Name = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8,
})

export const Title = styled('h3')({
  marginRight: 16,
})

export const Description = styled('div')({
  margin: 0,
  textAlign: 'justify',
})

export const Img = styled('img')({
  display: 'flex',
  height: 20,
})

export const List = styled('ul')({
  margin: '8px 0',
})
