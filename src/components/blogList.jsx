import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const BlogList = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
                edges {
                    node {
                        id
                        title
                        slug
                        author {
                            authorName
                        }
                        createdAt(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `);

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold font-special-elite-regular text-teal-600 mb-6 dark:text-teal-400">
                    Blog Posts
                </h1>
                <ul className="space-y-6">
                    {data.allContentfulBlogPost.edges.map(({ node }) => (
                        <li key={node.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                            <Link to={`/blog/${node.slug}`} className="text-2xl font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                                {node.title}
                            </Link>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                                Published on {node.createdAt} by {node.author.authorName}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogList;