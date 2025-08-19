function More() {
    const moreSkills = [
        
        { title: "HTML5 & CSS", desc: "Crafting clean, semantic, and accessible web structures with modern HTML and CSS." },
        { title: "TYPESCRIPT", desc: "Writing safer, scalable, and maintainable JavaScript applications with TypeScript." },
        { title: "MYSQL", desc: "Managing relational databases with structured queries and optimized performance." },
        { title: "GIT & GITHUB", desc: "Collaborating effectively and maintaining clean version history using Git and GitHub." },
        { title: "NEXT.JS", desc: "Developing high-performance, SEO-optimized web applications with Next.js." },
        { title: "WORDPRESS", desc: "Building dynamic, customizable, and SEO-friendly WordPress websites tailored to business needs." }
    ];

    // Split into two columns
    const leftSkills = moreSkills.slice(0, 3);
    const rightSkills = moreSkills.slice(3, 6);

    return (
        <div className="bg-black flex justify-center items-center py-20">
            <div className="w-3/4">
                
                <div className="text-center mb-14">
                    <p className="text-amber-300 font-semibold mb-3">MORE</p>
                    <p className="text-zinc-200 text-xl md:text-4xl lg:text-5xl font-bold">
                        Additional Skills That Strengthen My Development
                    </p>
                    <hr className="3/4  md:w-1/2 h-1 mx-auto bg-amber-300 my-9" />
                </div>

                
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    {/* Left Column */}
                    <div className="w-8/9 md:w-1/2">
                        <div className="w-8/9">
                            {leftSkills.map((skill, index) => (
                            <div key={index} className="mb-7 flex items-start">
                                <img src="/about/done.png" className="w-7 h-7 md:w-12 md:h-12 mr-3" alt="done" />
                                <div>
                                    <p className="text-amber-300 font-semibold">{skill.title}</p>
                                    <p className="hidden md:block text-zinc-200 font-semibold">{skill.desc}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                        
                    </div>

                    {/* Right Column */}
                    <div className="w-8/9 md:w-1/2 md:flex justify-end">
                        <div className="w-8/9 ">
                            {rightSkills.map((skill, index) => (
                            <div key={index} className="mb-7 flex items-start">
                                <img src="/about/done.png" className="w-7 h-7 md:w-12 md:h-12 mr-3" alt="done" />
                                <div>
                                    <p className="text-amber-300 font-semibold">{skill.title}</p>
                                    <p className="hidden md:block text-zinc-200 font-semibold">{skill.desc}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default More;
