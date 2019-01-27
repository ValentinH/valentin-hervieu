import React from 'react'
import { InterpolationWithTheme } from '@emotion/core'
import { Link } from './styles'

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  css?: InterpolationWithTheme<any>
}

const ExternalLink: React.SFC<Props> = ({ children, ...rest }) => (
  <Link {...rest} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)

export default ExternalLink
