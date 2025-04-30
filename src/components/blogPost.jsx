import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const BlogPost = ({ data }) => {
    const { title, createdAt, author, pages } = data.contentfulBlogPost;

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <Navbar />
            <div className="flex-grow max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold font-special-elite-regular text-teal-600 mb-4 dark:text-teal-600">{title}</h1>
                <p className="text-gray-500 text-sm mb-6">
                    Published on {createdAt} by {author.authorName}
                </p>
            </div>

            <div className="space-y-8">
                {pages.map((page, index) => (
                    <div key={index} className="flex justify-center">
                        <img
                            src={page.file.url}
                            alt={page.description}
                            className="w-full max-w-screen-md h-auto shadow-lg"
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            id
            title
            slug
            createdAt(formatString: "MMMM DD, YYYY")
            author {
                authorName
                bio {
                    bio
                }
                authorImage {
                    file {
                        url
                    }
                }
            }
            pages {
                file {
                    url
                }
                description
            }
        }
    }
`;

export default BlogPost;