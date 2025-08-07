import img from '../../assets3/hero.webp'
function Hero() {
    return (
        <div className='bg-black w-full h-screen  flex flex-col items-center relative'>
            <div className='flex items-center justify-center w-full h-full relative bottom-10'>
                <img src={img} alt="Web development" className='w-full h-full z-1 object-cover ' />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(0,0,0,1)_15%,_rgba(0,0,0,0.8)_30%,_transparent_100%)] z-2"></div>
            </div>

            <div className='flex justify-between  w-3/4 z-3 h-35 absolute top-80'>
                <div className='w-1/2'>
                    <p className=' font-bold text-amber-300 mb-5'>CONTACT</p>
                    <p className=' font-bold text-7xl text-zinc-200 mb-13'>Get In Touch</p>
                    <hr className="bg-zinc-200 h-1 border-0 w-8/15 mb-13" />
                    <p className='font-bold text-zinc-300 mb-5 pr-8'>We'd love to hear from you! Whether you have a question, want to start a project, or just want to say hello — feel free to reach out. Our team is always here to help and will get back to you as soon as possible.</p>
                </div>
                <div className='w-1/2 '>
                    <div className='pl-8'>
                        <p className=' font-bold text-amber-300 mb-2'>EMAIL</p>
                        <p className=' text-zinc-200 mb-10'>faizefaizan0605@gmail.com</p>
                    </div>
                    
                        
                    <form className=' flex flex-col pl-8'>
                        <input className='px-10 py-4 bg-zinc-900 text-zinc-200 font-bold text-lg placeholder:text-zinc-200 border-none focus:outline-none mb-4 ' type='email' placeholder='EMAIL'></input>
                        <button className='py-4 bg-amber-300 text-zinc-700 font-bold cursor-pointer transition duration-200'>SUBSCRIBE</button>
                    </form> 
                </div>
                
            </div>
        </div>
    );
}

export default Hero;