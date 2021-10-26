import React from 'react'
import config from '#src/const/config'

const NotFoundPage = () => (
  <>
    <h1>NOT FOUND</h1>
    <p>
      This page doesn&apos;t exist. However, if you really need it, you can
      submit a PR <a href={config.repository}>here</a>!
    </p>
  </>
)

export default NotFoundPage
