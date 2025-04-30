const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    const blogPostTemplate = path.resolve('./src/components/blogPost.jsx');

    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: blogPostTemplate,
            context: {
                slug: node.slug,
            },
        });
    });
};