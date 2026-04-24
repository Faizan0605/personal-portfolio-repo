import img from '../../assets/web-developer-9.webp';

export default function Sec5() {
    return (
        <div className="bg-black w-full h-[75vh] lg:h-screen flex flex-col items-center  relative">
            <div className="relative z-2 top-30">
                <h1 className="text-amber-300 text-4xl md:text-6xl lg:text-8xl font-bold w-9/8">BACK END</h1>
            </div>

            <div className='lg:hidden absolute z-1 top-50 w-3/4 flex flex-col  items-center'>
                <img src={img} alt="Web development" className="w-3/4 object-cover  filter grayscale"></img>
                <div className='w-3/4 flex justify-end'>
                    <button className=" bg-black text-zinc-200 text-sm mt-5 lg:mr-60 font-bold px-10 py-6">LIVE DEMO</button>
                </div>
            </div>
            <div className=" absolute w-6/7 lg:w-3/4 h-full flex justify-center bottom-0">
            <div className="w-1/2 h-full"></div>
                <div className="bg-zinc-200 w-1/2 h-full flex flex-col justify-center items-center">
                    <img src={img} alt="Web development" className="hidden lg:block w-3/4  object-contain relative top-20 filter grayscale"></img>
                    <div className='hidden lg:block w-3/4'>
                        <button className=" bg-black text-zinc-200 text-sm mt-35  font-bold px-10 py-6">LIVE DEMO</button>
                    </div>

                </div>
                
            </div>

        </div>
    );
}
