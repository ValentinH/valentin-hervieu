/* global module, require */
const packageJson = require('./package.json')

module.exports = {
  siteMetadata: {
    title: 'Valentin Hervieu',
    repository: packageJson.repository.url,
    email: 'valentin@hervi.eu',
    linkedinUrl: 'https://www.linkedin.com/in/valentin-hervieu/',
    githubUrl: 'http://github.com/ValentinH',
    twitterUrl: 'https://twitter.com/ValentinHervieu',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-emotion'],
}
