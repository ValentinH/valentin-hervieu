import React from 'react'

interface Props {
  user: string
  repo: string
  type?: string
}

const GithubButton: React.SFC<Props> = ({ user, repo, type = 'star' }) => {
  const typeString =
    type === 'star' ? '&type=star&count=true' : '&type=watch&v=2'
  return (
    <iframe
      src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}${typeString}`}
      title={`${repo} ${type} button`}
      frameBorder="0"
      scrolling="0"
      width="170px"
      height="20px"
      style={{ display: 'flex' }}
    />
  )
}

export default GithubButton
