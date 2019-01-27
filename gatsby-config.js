/* global module, require, process */
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
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://ce661a4a5d974d61b752bc771b266a25@sentry.io/1380519',
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].includes(process.env.NODE_ENV))(),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lobster Two`,
            variants: [`700`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1174950,
        sv: 6,
      },
    },
  ],
}
