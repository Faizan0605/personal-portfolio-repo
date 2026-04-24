import webImage from "../../assets/webdev-04-2.webp"

const skills = ['Next.js', 'React.js', 'Express', 'MongoDB', 'PostgreSQL']

const info = [
    {
        title: 'Background',
        text: 'I am a passionate Full Stack Web Developer with hands-on experience building modern, responsive web applications using the MERN stack and WordPress. I enjoy turning ideas into real-world digital products.'
    },
    {
        title: 'Education',
        text: 'B.Tech student at National Institute of Technology (NIT) Srinagar, one of the premier engineering institutions in India. Currently pursuing my degree while actively building real-world projects and sharpening my development skills.'
    },
]

function Sec2() {
    return (
        <>
            <div className="hidden bg-amber-300 h-350 lg:flex flex-col items-center justify-center">
                <div className="w-1/2 mt-20 h-full flex items-start justify-between">

                    <div className="w-1/2 mx-5 flex flex-col items-end justify-end">
                        <div className="h-4 w-full bg-black mb-5 relative top-2"></div>
                        {skills.map((skill) => (
                            <h1
                                key={skill}
                                className="text-5xl text-zinc-800 font-bold mt-1 py-3 hover:w-full hover:text-right hover:bg-black hover:text-white"
                            >
                                {skill}
                            </h1>
                        ))}
                    </div>

                    <div className="w-1/2 mx-5">
                        {info.map(({ title, text }) => (
                            <div key={title}>
                                <h1 className="text-lg font-medium text-zinc-800 mb-2">{title}</h1>
                                <p className="text-sm mb-5 text-zinc-600">{text}</p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-full h-900 overflow-hidden">
                    <img
                        src={webImage}
                        alt="Web development"
                        className="w-full h-full object-cover scale-110 relative top-10"
                    />
                </div>
            </div>
        </>
    );
}

export default Sec2;