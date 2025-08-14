import webImage from '../../assets/webdev-03-1.webp';
import webImage1 from '../../assets/web-developer-30.webp';
import webImage2 from '../../assets/web-developer-28.webp'

function Sec1() {
    return (
        <div className="bg-black h-330 w-full">


            <div className='flex items-center justify-center z-1 w-full h-full overflow-hidden '>
                <img src={webImage} alt="Web development" className='w-full h-full object-contain scale-125 relative bottom-34'/>
            </div>

            <div className='flex flex-col items-center justify-center z-2 relative bottom-290'>
                <div className='w-3/4'>
                    <div className=' flex items-center justify-between w-full'>
                        <div className=' w-1/2'>
                            <img src={webImage1} alt="Web development" className='w-8/9' />
                        </div>
                        
                        <div className=' w-1/2 flex flex-col justify-end'>
                            <div className=''>
                                <h1 className='font-extrabold text-7xl font-mono text-amber-300 text-right tracking-tighter'>Web Solutions</h1>
                                <h1 className='font-extrabold text-7xl font-mono text-amber-300 text-right tracking-tighter'>For Any Sized</h1>
                                <h1 className='font-extrabold text-7xl font-mono text-amber-300 text-right tracking-tighter'>Project</h1>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-amber-300 text-xs mr-1 font-bold px-8 py-5 mt-9'>HIRE ME!</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-19 items-center justify-between w-full'>
                        <div className=' flex flex-col justify-end w-1/2'>
                            <p className='text-zinc-200 text-lg font-medium text-right w-8/9'>Pellentesque adipiscing tristique adipiscing molestie auctor sodales a. Urna in purus, pellentesque ut est felis duis eros. Amet viverra placerat amet rhoncus sed pellentesque penatibus scelerisque diam. Faucibus sapien diam scelerisque turpis enim etiam pulvinar arcu. Varius turpis interdum blandit nisl, purus, nunc, vestibulum morbi.</p>
                            
                            <div className='w-8/9 flex justify-end'>
                                <button className='bg-amber-300 text-xs mt-9   font-bold px-8 py-5'>HIRE ME!</button>
                            </div>
                        </div>
                        <div className=' flex justify-end  self-end w-1/2'> 
                            <img src={webImage2} alt="Web development" /> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sec1;
