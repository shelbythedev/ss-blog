import * as React from 'react';
import Navbar from '../components/navbar';
import Bio from '../components/bio';
import Footer from '../components/footer';

const about = () => {
    return (
        <div class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <Navbar />
            <Bio />
            <Footer />
        </div>
    );
};

export default about;