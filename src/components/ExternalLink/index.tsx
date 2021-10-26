import React, { Attributes } from 'react'

import { Link } from './styles'

type Props = React.HTMLProps<HTMLAnchorElement> & {
  css?: Attributes['css']
}

const ExternalLink: React.FC<Props> = ({ children, ...rest }) => (
  <Link {...rest} as={undefined} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)

export default ExternalLink
