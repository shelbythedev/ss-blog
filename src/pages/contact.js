import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';
import ContactInfo from '../components/contactInfo';

const contact = () => {
    return (
        <div class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <Navbar />
            <div class="flex-grow">
                <div class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-8 px-4 lg:px-16">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default contact;