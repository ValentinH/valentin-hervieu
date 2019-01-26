// @flow
import React from 'react'
import ReactGA from 'react-ga'

class Analytics extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-40453888-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  render() {
    return null
  }
}

export default Analytics
