import { graphql } from 'gatsby';

export const GET_BLOG_POSTS = graphql`
  query {
    allContentfulBlogPost {
        edges {
            node {
                title
                slug
                author {
                    authorName
                    }
                createdAt
            }
        }
    }
    }
`;

// export const GET_BLOG_POST = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//         id
//         title
//         slug
//         createdAt
//         author {
//             authorName
//             bio {
//                 bio
//             }
//             authorImage {
//                 file {
//                     url
//                 }
//             }
//         }
//         pages {
//         file {
//             url
//         }
//         description
//         }
//     }
//     }
// `;