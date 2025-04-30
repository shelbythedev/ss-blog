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
                    Published on {createdAt} by {author.authorName}<br />
                    Typed on a {data.contentfulBlogPost.typewriter.year} {data.contentfulBlogPost.typewriter.brand} {data.contentfulBlogPost.typewriter.model}
                </p>
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
                {/* About the Author Section */}
                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4">About the Author</h2>
                    <div className="flex items-center space-x-4">
                        {author.authorImage?.file?.url && (
                            <img
                                src={author.authorImage.file.url}
                                alt={`Photo of ${author.authorName}`}
                                className="w-16 h-16 rounded-full shadow-lg"
                            />
                        )}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{author.authorName}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{author.bio?.bio}</p>
                        </div>
                    </div>
                </div>
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
            typewriter {
                brand
                model
                year
            }
        }
    }
`;

export default BlogPost;