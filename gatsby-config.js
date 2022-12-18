/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Counterpoint Brewing & Blending`,
    description: `A sample blog to explore the basics of Gatsby.js using content from my personal hobby beer brewing blog.`,
    author: `sds-smith`,
    siteUrl: `https://sds-smith.dev`,
  },
  plugins: [
    `gatsby-plugin-image`,  
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "counterpoint-brewing-blending",
        protocol: "https",
        hostname: "http://counterpoint-brewing-blending.s3-website-us-east-1.amazonaws.com"
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/counterpoint-black-on-transparent.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
