import img1 from '../../assets1/web-developer-19.webp'
import img2 from '../../assets1/web-developer-15.webp'
function Sec2() {
    return (<div className="bg-black h-auto relative  flex flex-col items-center">
        <div className="flex flex-col lg:flex-row lg:justify-around items-center w-3/4 lg:mb-14  ">
            <div className='lg:mr-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img1} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                    <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
            <div className='lg:ml-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img2} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                    <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around items-center w-3/4 lg:mb-14">
            <div className='lg:mr-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img1} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                    <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
            <div className='lg:ml-8 my-3 lg:my-0'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img2} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                    <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
            <div className='h-10 lg:h-0'>

            </div>
        </div>

    </div>);
}

export default Sec2;