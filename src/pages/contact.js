import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';

const contact = () => {
    return (
        <div class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default contact;