import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ReactMarkdown from 'react-markdown';
import { FaFont, FaFileAlt } from 'react-icons/fa'; // Import icons

const BlogPost = ({ data }) => {
    const { title, createdAt, author, pages, tags, post } = data.contentfulBlogPost;

    // Default view set to 'raw' (post view)
    const [view, setView] = useState('raw');

    // Helper function to parse raw JSON content
    const parseRawContent = (raw) => {
        try {
            const parsed = JSON.parse(raw);
            const content = parsed.content || [];
            return content
                .map((node) => {
                    if (node.nodeType === 'heading-1') {
                        return `# ${node.content?.map((child) => child.value).join('')}`;
                    } else if (node.nodeType === 'heading-2') {
                        return `## ${node.content?.map((child) => child.value).join('')}`;
                    } else if (node.nodeType === 'paragraph') {
                        return node.content?.map((child) => child.value).join('');
                    } else if (node.nodeType === 'unordered-list') {
                        return node.content
                            ?.map((listItem) =>
                                listItem.content
                                    ?.map((child) => `- ${child.value}`)
                                    .join('\n')
                            )
                            .join('\n');
                    }
                    return '';
                })
                .join('\n\n');
        } catch (error) {
            console.error('Error parsing raw JSON:', error);
            return '';
        }
    };

    const rawContent = post?.raw ? parseRawContent(post.raw) : '';

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <Navbar />
            <div className="flex-grow max-w-4xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold font-special-elite-regular text-teal-600 mb-4 dark:text-teal-600">
                        {title}
                    </h1>
                </div>

                {/* Display Categories */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-teal-100 text-teal-700 dark:bg-teal-800 dark:text-teal-200 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                        >
                            {tag.category}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 text-sm mb-6">
                    Published on {createdAt} by {author.authorName}
                    <br />
                    Typed on a {data.contentfulBlogPost.typewriter.year}{' '}
                    {data.contentfulBlogPost.typewriter.brand}{' '}
                    {data.contentfulBlogPost.typewriter.model}
                </p>

                {/* Toggle for Switching Views */}
                <div className="mb-4 flex justify-center">
                    <div className="flex items-center space-x-2">
                        <FaFileAlt
                            className={`text-2xl ${
                                view === 'pages' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-400'
                            }`}
                        />
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={view === 'raw'}
                                onChange={() => setView(view === 'pages' ? 'raw' : 'pages')}
                            />
                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-400 dark:bg-gray-700 rounded-full peer dark:peer-focus:ring-teal-600 peer-checked:bg-teal-600">
                                <div
                                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                                        view === 'raw' ? 'translate-x-7' : ''
                                    }`}
                                ></div>
                            </div>
                        </label>
                        <FaFont
                            className={`text-2xl ${
                                view === 'raw' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-400'
                            }`}
                        />
                    </div>
                </div>

                {/* Content Display */}
                {view === 'pages' && pages.length > 0 ? (
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
                ) : (
                    rawContent && (
                        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                            <ReactMarkdown>{rawContent}</ReactMarkdown>
                        </div>
                    )
                )}

                {/* About the Author Section */}
                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4">
                        About the Author
                    </h2>
                    <div className="flex items-center space-x-4">
                        {author.authorImage?.file?.url && (
                            <img
                                src={author.authorImage.file.url}
                                alt={`Photo of ${author.authorName}`}
                                className="w-16 h-16 rounded-full shadow-lg"
                            />
                        )}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {author.authorName}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {author.bio?.bio}
                            </p>
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
            tags {
                category
            }
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
            post {
                raw
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