import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const BlogList = () => {
    const location = useLocation();
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [activeTag, setActiveTag] = useState("");

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        id
                        title
                        post {
                            raw
                        }
                        slug
                        tags {
                            category
                        }
                        author {
                            authorName
                        }
                        createdAt(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `);

    const allPosts = data.allContentfulBlogPost.edges;

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tag = params.get("tag");
        setActiveTag(tag);

        if (tag) {
            const filtered = allPosts.filter(post =>
                post.node.tags.some(tagObj => tagObj.category === tag)
            );
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(allPosts);
        }
    }, [location.search, allPosts]);

    // Helper function to extract text from the raw JSON
    const extractTextFromRaw = (raw) => {
        try {
            const parsed = JSON.parse(raw);
            const content = parsed.content || [];
            return content
                .map((node) => node.content?.map((child) => child.value).join("") || "")
                .join(" ");
        } catch (error) {
            console.error("Error parsing raw JSON:", error);
            return "";
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold font-special-elite-regular text-teal-600 mb-6 dark:text-teal-400">
                    {activeTag ? `Posts Tagged: ${activeTag}` : "Recent Posts"}
                </h1>
                <ul className="space-y-6">
                    {filteredPosts.map(({ node }) => (
                        <li key={node.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                            <Link
                                to={`/blog/${node.slug}`}
                                className="text-2xl font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                {node.title}
                            </Link>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                                Published on {node.createdAt} by {node.author.authorName}
                            </p>
                            {node.post?.raw && (
                                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                                    {extractTextFromRaw(node.post.raw).slice(0, 150)}...
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogList;