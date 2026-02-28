import img1 from '../../assets1/web-developer-19.webp'
import img2 from '../../assets1/web-developer-15.webp'
function Sec2() {
    return (<div className="bg-black h-auto relative  flex flex-col items-center">
        <div className="flex flex-col lg:flex-row lg:justify-around items-center w-3/4 lg:mb-14  ">
            <div className='lg:mr-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img1} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>QUYETO DIGITAL</p>
                    <button
                        onClick={() => window.open("https://quyetodigital.com", "_blank")}
                        className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
            <div className='lg:ml-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img2} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>MERN CHAT</p>
                    <button
                        onClick={() => window.open("https://mern-chat-app-7inc.onrender.com/", "_blank")}
                        className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around items-center w-3/4 lg:mb-14">
            <div className='lg:mr-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img1} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>CLOMAGIN</p>
                    <button
                        onClick={() => window.open("https://cloudinary-powered-app.vercel.app/", "_blank")}
                        className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
            <div className='lg:ml-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src="https://image2url.com/r2/default/images/1772299821195-f7918ddb-122c-4392-807c-b110d3d24c30.png" alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>BOOKIFIED</p>
                    <button
                        onClick={() => window.open("https://bookified-cyan.vercel.app/", "_blank")}
                        className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7' >VIEW PROJECT</button>
                </div>
            </div>

        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around items-center w-3/4 lg:mb-14">
            <div className='lg:mr-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img1} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>URL SHORTNER</p>
                    <button
                        onClick={() => window.open("https://url-shortner-74fh.onrender.com", "_blank")}
                        className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
            <div className='lg:ml-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src="https://image2url.com/r2/default/images/1772299821195-f7918ddb-122c-4392-807c-b110d3d24c30.png" alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>AI CHAT TOOL</p>
                    <button
                        onClick={() => window.open("https://bookified-cyan.vercel.app/", "_blank")}
                        className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7' >VIEW PROJECT</button>
                </div>
            </div>

        </div>

    </div>);
}

export default Sec2;