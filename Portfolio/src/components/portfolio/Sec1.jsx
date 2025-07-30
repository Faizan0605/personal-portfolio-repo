    import img from '../../assets1/web-developer-26.webp' 
    function Sec1() {
        return ( <>
            <div className='relative h-screen flex justify-center bg-black '>
                <img src={img} alt="Web development" className="w-full h-full object-cover absolute z-1 bottom-30 "></img>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(0,0,0,1)_20%,_rgba(0,0,0,0.8)_40%,_transparent_100%)] z-2"></div>
                <div className='relative top-95 h-35 z-3 flex justify-between w-3/4' >
                    <div>
                        <p className='font-bold text-amber-300 '>PORTFOLIO</p>
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