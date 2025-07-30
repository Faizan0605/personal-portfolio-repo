import img from '../../assets3/hero.webp'
function Hero() {
    return (
        <div className='bg-black w-full h-screen flex flex-col items-center relative'>
            <div className='flex items-center justify-center w-full h-full absolute'>
                <img src={img} alt="Web development" className='w-full h-full z-1  bottom-20' />
                <div className=" inset-0 bg-[linear-gradient(to_top,_rgba(0,0,0,1)_28%,_rgba(0,0,0,0.8)_50%,_transparent_80%)] z-2"></div>
            </div>
        </div>
    );
}

export default Hero;