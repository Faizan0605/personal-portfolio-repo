import img1 from '../../assets1/web-developer-19.webp'
import img2 from '../../assets1/web-developer-15.webp'
import bookified from '../../project-images/bookified.png'
import clomagin from '../../project-images/clomagin.png'
import quyeto from '../../project-images/quyeto.png'
import url from '../../project-images/url.png'

const projects = [
    { img: quyeto, title: 'QUYETO DIGITAL', url: 'https://quyetodigital.com' },
    { img: img2, title: 'MERN CHAT', url: 'https://mern-chat-app-7inc.onrender.com/' },
    { img: clomagin, title: 'CLOMAGIN', url: 'https://cloudinary-powered-app.vercel.app/' },
    { img: bookified, title: 'BOOKIFIED', url: 'https://bookified-cyan.vercel.app/' },
    { img: url, title: 'URL SHORTNER', url: 'https://url-shortner-74fh.onrender.com' },
    { img: img1, title: 'AI CHAT TOOL', url: 'https://bookified-cyan.vercel.app/' },
]

function Sec2() {
    return (
        <div className="bg-black h-auto relative flex flex-col items-center">
            {Array.from({ length: Math.ceil(projects.length / 2) }, (_, rowIndex) => (
                <div key={rowIndex} className="flex flex-col lg:flex-row lg:justify-around items-center w-3/4 lg:mb-14">
                    {projects.slice(rowIndex * 2, rowIndex * 2 + 2).map((project, colIndex) => (
                        <div key={project.title} className={`${colIndex === 0 ? 'lg:mr-8' : 'lg:ml-8'} my-3 lg:my-0`}>
                            <div className='bg-zinc-900 pb-7'>
                                <img
                                    src={project.img}
                                    alt="Web development"
                                    className="w-full h-74 object-cover filter grayscale hover:grayscale-0 transition duration-200"
                                />
                                <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>{project.title}</p>
                                <button
                                    onClick={() => window.open(project.url, "_blank")}
                                    className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>
                                    VIEW PROJECT
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Sec2;