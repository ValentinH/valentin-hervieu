import styled from '@emotion/styled'

import colors from '../../const/colors'

export const Link = styled('a')({
  textDecoration: 'none',
  color: colors.primaryColor,
  ':hover': {
    textDecoration: 'underline',
  },
})
