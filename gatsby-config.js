/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  // TODO: 进一步SEO
  siteMetadata: {
    title: `World Leading PCE Technology!`,
    description: `Meet the pinnacle of innovation in the world of Concrete Water Reducers and Equipment manufacturing.`,
    author: `@emopp`,
    siteUrl: `https://jsbpce.com/`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-svgr',
    // Tailwind Css
    'gatsby-plugin-postcss',
    
    // TODO: 进一步配置 SEO
    // mainfest 配置
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JSB PCE Technology`,
        short_name: `JSB Tech`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/assets/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // TODO： 开发和发布版分别配置 robots.txt
    // robots.txt 配置
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/'] }]
      }
    },
    // graphql 文件系统 配置
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`, // 指定存放 Markdown 文件的目录
    //   },
    // },

    // 多语言配置
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // 语言 JSON 文件的路径
        path: `${__dirname}/src/intl`,
        // 支持的语言列表
        languages: ['zh', 'ar', 'es', 'ru', `en`],
        // 默认语言
        defaultLanguage: `en`,
        // 重定向到浏览器语言设置（如果您希望开启这项功能）
        redirect: false,
      },
    },

  ],
}
