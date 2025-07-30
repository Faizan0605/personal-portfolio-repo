import img1 from '../../assets1/web-developer-19.webp'
import img2 from '../../assets1/web-developer-15.webp'
function Sec2() {
    return (<div className="bg-black h-auto relative  flex flex-col items-center">
        <div className="flex justify-around items-center w-3/4 mb-14">
            <div className='px-8'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img1} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                    <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
            <div className='px-8'>
                <div className='bg-zinc-900 pb-7'>
                    <img src={img2} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                    <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                    <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
                </div>
            </div>
        </div>
        <div className="flex justify-around items-center w-3/4 mb-10">
            <div className='px-8'><div className='bg-zinc-900 pb-7'>
                <img src={img1} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
            </div></div>
            <div className='px-8'><div className='bg-zinc-900 pb-7'>
                <img src={img2} alt="Web development" className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-200"></img>
                <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
            </div></div>
        </div>

    </div>);
}

export default Sec2;