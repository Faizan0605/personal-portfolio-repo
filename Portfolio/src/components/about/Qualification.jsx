function Qualification() {
    const qualifications = [
        {
            title: "NIT Srinagar",
            subtitle: "B.Tech in ECE",
            duration: "2023 - Present"
        },
        {
            title: "LAXMI PUBLIC SCHOOL (CBSE)",
            subtitle: "Higher Secondary (PHYSICS CHEMISTRY MATHS)",
            duration: "2020 - 2022"
        }
    ];

    return (
        <div className="bg-zinc-100 flex justify-center items-center pt-20 pb-30">
            <div className="w-3/4">
                <p className="text-black text-2xl md:text-4xl font-bold text-center mb-10">My Academic Journey</p>
                <hr className="w-1/2 h-1 bg-amber-300 mx-auto mb-12" />


                <div className="">
                    {qualifications.map((q, index) => (
                        <div>
                            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-300 pb-3 mt-6">
                                <p className="text-black font-bold md:w-1/3">{q.title}</p>
                                <p className="text-zinc-800 md:w-1/3 md:text-center">{q.subtitle}</p>
                                <p className="text-zinc-800 md:w-1/3 md:text-right">{q.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Qualification;
