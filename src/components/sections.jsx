import React from "react"
import teamLead from "../images/teamLead.png"
import shelby from "../images/shelby.jpg"
import modelA from "../images/modelA.jpg"
import underwood from "../images/1914underwood.png"

const Sections = () => {
    return ( 
        <div className="bg-white dark:bg-zinc-900 px-6 py-12 space-y-16 lg:space-y-24">
            <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-6">
                <img
                    src={teamLead}
                    alt="Team collaboration in tech environment"
                    className="w-full md:w-1/3 rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold font-special-elite-regular text-teal-600 mb-4 dark:text-teal-600">
                        Engineering Leadership & Team Development
                    </h2>
                    <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                        As a solutions architect and engineering leader, I specialize in building high-performing software teams that thrive on collaboration, trust, and technical excellence. I’ve led cross-functional teams through complex cloud-native projects, provided mentorship at every career level, and helped shape both product and engineering strategy. My leadership style is people-first—focused on clear communication, career development, and delivering results that last.
                    </p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-center space-y-6 md:space-y-0 md:space-x-6">
                <img
                    src={shelby}
                    alt="Rails architecture code and cloud diagram"
                    className="w-full md:w-1/3 rounded-2xl shadow-lg m-3"
                />
                <div>
                    <h2 className="text-3xl font-bold font-special-elite-regular text-teal-600 mb-4 dark:text-teal-600">
                        Senior Ruby on Rails Engineer & Cloud Architect
                    </h2>
                    <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                        With over a decade of experience in full-stack development, I specialize in Ruby on Rails and JavaScript frameworks, crafting scalable cloud software and backend systems that are reliable, maintainable, and performance-optimized. As a principal-level engineer, I’ve architected services in AWS and IBM environments, built APIs that power mission-critical platforms, and led initiatives that modernize legacy systems.
                    </p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-6">
                <img
                    src={modelA}
                    alt="Ford Model A and vintage typewriter collection"
                    className="w-full md:w-1/4 rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold font-special-elite-regular text-teal-600 mb-4 dark:text-teal-600">
                    Antique Machines & Analog Joy
                    </h2>
                    <p className="text-zinc-900 dark:text-zinc-300 text-lg">
                    I collect and restore vintage typewriters and antique automobiles—especially Ford Model A’s. These aren’t just display pieces: they’re functional, well-loved machines that I maintain and use. Typewriters remind me of the beauty in simplicity and craftsmanship, while my Model A’s connect me to a hands-on mechanical world that predates modern software. Sometimes the best way to appreciate progress is to spend time with the past.
                    </p>
                </div>
                <img
                    src={underwood}
                    alt="vintage typewriter collection"
                    className="w-full md:w-1/4 rounded-2xl shadow-lg"
                />
            </section>
        </div>
    )
}

export default Sections