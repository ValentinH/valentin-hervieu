import styled from '@emotion/styled'

export const Title = styled('h2')({
  marginTop: 0,
  marginBottom: 16,
})

export const Clearfix = styled('div')({
  ':after': {
    content: '""',
    clear: 'both',
    display: 'table',
  },
})

export const ImgWrapper = styled('div')({
  width: 95,
  float: 'left',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: 4,
  padding: 3,
  boxShadow: '1px 1px 3px #ccc',
  marginRight: 16,
  '@media (min-width: 960px)': {
    width: 156,
  },
})
