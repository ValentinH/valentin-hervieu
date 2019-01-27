/* global module, require */
const packageJson = require('./package.json')
const colors = require('./src/const/colors.json')

module.exports = {
  siteMetadata: {
    title: 'Valentin Hervieu',
    repository: packageJson.repository.url,
    email: 'valentin@hervi.eu',
    linkedinUrl: 'https://www.linkedin.com/in/valentin-hervieu/',
    githubUrl: 'http://github.com/ValentinH',
    twitterUrl: 'https://twitter.com/ValentinHervieu',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Valentin Hervieu',
        short_name: 'ValentinH',
        start_url: '/',
        background_color: '#eee',
        theme_color: colors.primaryColor,
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`IntersectionObserver`],
      },
    },
    'gatsby-plugin-offline',
  ],
}
