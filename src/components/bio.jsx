import React from "react"
import shelby from "../images/shelby.jpg"

const Bio = () => {
    return ( 
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-semibold text-teal-600 font-special-elite-regular mb-6">
                About Me
            </h1>

            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                <img
                    src={shelby}
                    alt="Shelby Solomon"
                    className="w-48 h-48 object-cover rounded-2xl shadow-lg" />
                <div className="text-lg text-zinc-800 dark:text-zinc-300 space-y-6">
                    <p>
                        Hi, I’m <strong>Shelby Solomon</strong>, a <strong>solutions architect</strong>, <strong>backend software engineer</strong>, and <strong>Ruby on Rails expert</strong> based in the <strong>DFW area</strong>. With over a decade of experience, I specialize in designing and building scalable backend systems, modernizing legacy infrastructure, and providing <strong>engineering leadership</strong> to high-performing teams.
                    </p>

                    <p>
                        As a <strong>backend engineer</strong>, my focus is on <strong>Ruby on Rails</strong>, <strong>JavaScript</strong>, and <strong>AWS</strong> cloud services. While my expertise lies primarily in backend development, I also have experience with <strong>full-stack development</strong>, enabling me to build robust and maintainable applications from end to end.
                    </p>

                    <p>
                        In addition to my technical skills, I’m passionate about <strong>mentoring engineers</strong> and fostering collaboration within teams to create solutions that are not only innovative but also sustainable in the long term. My leadership style is centered around clear communication, career development, and delivering high-quality results.
                    </p>

                    <p>
                        Outside of my professional work, I’m an enthusiast of American history, and my wife and I share a love for collecting antiques. We spend our time restoring <strong>vintage typewriters</strong> and <strong>classic Ford Model A cars</strong>, finding joy in craftsmanship and the timeless value of mechanical design.
                    </p>

                    <p>
                        When I’m not coding or mentoring, I enjoy spending time with my two dogs and two cats, embracing the balance between the fast-paced world of technology and the simplicity of analog life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bio
