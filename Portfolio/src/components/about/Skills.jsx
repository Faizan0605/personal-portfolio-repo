import { Link } from 'react-router';

function Skills() {
    const skills = [
        {
            title: "REACT JS",
            desc: "Crafting fast, interactive, and responsive UIs with React.",
        },
        {
            title: "TAILWIND CSS",
            desc: "Designing sleek, responsive layouts with utility-first styling.",
        },
        {
            title: "NODE JS",
            desc: "Building scalable, server-side applications with JavaScript.",
        },
        {
            title: "EXPRESS JS",
            desc: "Creating fast and efficient APIs with minimal setup using Express.js.",
        },
        {
            title: "MONGODB",
            desc: "Managing flexible, scalable, and high-performance NoSQL databases.",
        },
        {
            title: "JAVASCRIPT",
            desc: "Powering interactive, dynamic, and modern web applications.",
        },
    ];

    return (
        <>
            <div className="bg-black flex justify-center items-center">
                <div className="w-3/4 flex flex-col lg:flex-row justify-center items-center ">
                    <div className="lg:w-1/2 flex justify-start">
                        <div className="lg:w-8/9 bg-zinc-800 flex justify-center items-center">
                            <div className="w-3/4 my-15">
                                <p className="text-amber-300 font-semibold text-right mb-3">
                                    SKILLS
                                </p>
                                <p className="text-zinc-100 text-xl md:text-3xl lg:text-5xl font-bold text-right">
                                    A Wide Variety of Skills for an Array of Projects
                                </p>
                                <hr className="w-1/2 h-1 ml-auto bg-amber-300 my-9" />
                                <p className="hidden lg:block text-zinc-200 font-semibold text-right">
                                    I bring expertise in frontend, backend, and WordPress
                                    development, with a strong focus on building fully responsive,
                                    mobile-friendly, and performance-optimized solutions. My skill
                                    set enables me to design seamless user interfaces, develop
                                    robust server-side architectures, and create customized
                                    WordPress platforms that align with diverse business needs.
                                </p>
                                <div className="flex justify-end lg:mb-20">
                                    <Link to="/portfolio">
                                        <button className="border-2 border-amber-300 text-amber-300 text-xs font-bold px-8 py-5 lg:mt-9 hover:cursor-pointer">FEATURED WORK</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-end ">
                        <div className="lg:w-8/9 flex items-start ">
                            <div className="my-15">
                                {skills.map((skill, index) => (
                                    <div key={index} className="mb-7 flex justify-start">
                                        <img
                                            src="/about/done.png"
                                            className="w-15 h-15 mr-3"
                                            alt={skill.title}
                                        />
                                        <div>
                                            <p className="text-amber-300 font-semibold">
                                                {skill.title}
                                            </p>
                                            <p className="text-zinc-200 font-semibold">
                                                {skill.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
