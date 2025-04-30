import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BlogList from '../components/blogList';

const BlogPage = () => {
    return (
        <div class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <Navbar />
            <BlogList />
            <Footer />
        </div>
    );
};

export default BlogPage;