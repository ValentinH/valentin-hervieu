import styled from '@emotion/styled'

export const Title = styled('h2')({
  marginTop: 0,
  marginBottom: 16,
})

export const Img = styled('img')({
  float: 'left',
  height: 120,
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: 4,
  padding: 3,
  boxShadow: '1px 1px 3px #ccc',
  marginRight: 16,
  '@media (min-width: 960px)': {
    height: 200,
  },
})

export const Clearfix = styled('div')({
  ':after': {
    content: '""',
    clear: 'both',
    display: 'table',
  },
})
