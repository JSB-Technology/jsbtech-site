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
    title: `JSB PCE Technology`,
    description: `Meet the pinnacle of innovation in the world of Concrete Water Reducers and Equipment manufacturing.`,
    author: `@emopp`,
    siteUrl: `https://jsbpce.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        
      },
    },
    // MD 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`, // 指定存放 Markdown 文件的目录
      },
    },
    // 添加 gatsby-transformer-remark 插件
    `gatsby-transformer-remark`,
    // Tailwind Css
    'gatsby-plugin-postcss',

    // 其他的这个那个
    `gatsby-transformer-sharp`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // robots.txt
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/'] }]
      }
    },
  ],
}
