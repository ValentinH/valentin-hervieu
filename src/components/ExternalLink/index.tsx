import React from 'react'
import { Link } from './styles'

type Props = React.HTMLProps<HTMLAnchorElement> & {
  css?: any // TODO fix me
}

const ExternalLink: React.FC<Props> = ({ children, ...rest }) => (
  <Link {...rest} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)

export default ExternalLink
