function Hero() {
  return (
    <>
      <div className="bg-[url('/about/web-developer-25.webp')] bg-cover bg-center h-screen w-full flex justify-center items-center relative">
         <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(0,0,0,1)_20%,_rgba(0,0,0,0.8)_40%,_transparent_100%)]"></div>
        <div className="hidden w-3/4 h-full lg:flex justify-center items-center z-10">
          <div className="w-1/2 flex justify-center">
            <div className="w-3/4 h-100 flex justify-end ">
              <img src="/about/my_pic.jpg" alt="description" className="w-30 h-30 rounded-full object-cover grayscale" />
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-amber-300 font-bold">FAIZAN HASHMI</h1>
            <h1 className="text-zinc-200 text-7xl font-bold">FULL STACK <br /> DEVELOPER</h1>
            <hr className="h-1 bg-white w-3/5 my-9"></hr>
            <p className="text-zinc-200 font-semibold text-lg ">I am a Full Stack Developer specializing in building efficient, scalable, and user-centric web applications by combining robust backend solutions with seamless frontend experiences.  </p>
            <button className='bg-amber-300 text-xs  font-bold px-8 py-5 mt-9'>HIRE ME!</button>
          </div>
        </div>

        {/*below is for tab and phone view */}
        <div className="lg:hidden w-3/4  h-full flex flex-col justify-center items-center z-10">
          
            <div className="flex w-full justify-end">
              <img src="/about/my_pic.jpg" alt="description" className="w-30 h-30 rounded-full object-cover grayscale mb-5" />
            </div>
          
          <div className="">
            <h1 className="text-amber-300 text-sm font-bold mb-3">FAIZAN HASHMI</h1>
            <h1 className="text-zinc-200 text-4xl font-bold">FULL STACK DEVELOPER</h1>
            <hr className="h-1 bg-zinc-200 w-3/5 my-9"></hr>
            <p className="text-zinc-200 font-semibold text-sm ">I am a Full Stack Developer specializing in building efficient, scalable, and user-centric web applications by combining robust backend solutions with seamless frontend experiences.  </p>
            <button className='bg-amber-300 text-xs  font-bold px-8 py-5 mt-9'>HIRE ME!</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;
