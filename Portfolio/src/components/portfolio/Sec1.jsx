import img from '../../assets1/web-developer-26.webp' 
function Sec1() {
    return ( <>
        <div className='relative h-screen flex justify-center'>
            <img src={img} alt="Web development" className="w-full h-full object-cover absolute z-1 bottom-30 "></img>
            <div className='relative top-95 z-1 flex justify-between w-3/4 ' >
                <div >
                    <p className='font-bold text-amber-300'>PORTFOLIO</p>
                    <p className='font-bold text-zinc-200 text-7xl'>My Work</p>
                </div>

                <div>
                    <button className='bg-amber-300 font-bold py-5 px-10'>START YOUR OWN PROJECT</button>
                </div>
            </div>
        </div>
        
    </> );
}

export default Sec1;