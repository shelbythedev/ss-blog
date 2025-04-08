const { config } = require("dotenv");

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Shelby Solomon`,
        siteUrl: "https://shelbysolomon.netlify.app",
        description: `Shelby Solomon's personal website`
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
                "spaceId": process.env.CONTENTFUL_SPACE_ID
            }
        },
         "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: "gatsby-plugin-postcss",
            options: {
                postCssPlugins: [
                    require('postcss-import'),
                    require('@tailwindcss/postcss')({config: './tailwind.config.js'}),
                    require('autoprefixer'),
                    require('postcss-preset-env')({
                        stage: 1
                    }),
                ],
            },
        }, "gatsby-plugin-sitemap", {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        // }, "gatsby-plugin-mdx", {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         "name": "pages",
        //         "path": "./src/pages/"
        //     },
        //     __key: "pages"
        }
    ]
};