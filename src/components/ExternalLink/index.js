import React from 'react'
import { Link } from './styles'

const ExternalLink = ({ children, ...rest }) => (
  <Link {...rest} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)

export default ExternalLink
