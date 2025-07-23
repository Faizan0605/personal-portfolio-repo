import webImage from '../../assets/webdev-03-1.webp';
import webImage1 from '../../assets/web-developer-30.webp';
import webImage2 from '../../assets/web-developer-28.webp'

function Sec1() {
    return (
        <div className="bg-black h-330 w-full">


            <div className='flex item-center justify-center z-1 w-full h-full overflow-hidden '>
                <img src={webImage} alt="Web development" className='w-full h-full object-contain scale-125 relative bottom-34'/>
            </div>

            <div className='flex flex-col items-center justify-center z-2 relative bottom-290'>
                <div className='size-270'>

                    <div className=' flex items-center justify-between '>
                        <div className=' w-260'><img src={webImage1} alt="Web development" /></div>
                        <div className=' flex flex-col justify-end'>
                            <div className=''><h1 className='font-extrabold text-7xl font-mono text-amber-300 text-right tracking-tighter'>Web Solutions For Any Sized Project</h1></div>
                            <div className='flex justify-end'><button className='bg-amber-300 text-xs mr-1 font-bold px-8 py-5 mt-9'>HIRE ME!</button></div>
                        </div>
                    </div>


                    <div className='flex mt-9 items-center justify-between'>
                        <div className='ml-22 flex flex-col justify-end w-307'>
                            <div><p className='text-zinc-200 text-lg font-medium text-right w-100'>Pellentesque adipiscing tristique adipiscing molestie auctor sodales a. Urna in purus, pellentesque ut est felis duis eros. Amet viverra placerat amet rhoncus sed pellentesque penatibus scelerisque diam. Faucibus sapien diam scelerisque turpis enim etiam pulvinar arcu. Varius turpis interdum blandit nisl, purus, nunc, vestibulum morbi.</p></div>
                            <div className='flex justify-end'><button className='bg-amber-300 text-xs mt-9 mr-25  font-bold px-8 py-5'>HIRE ME!</button></div>
                        </div>
                        <div className=' flex justify-end  self-end w-300 mr-1'> <img src={webImage2} alt="Web development" /> </div>
                        
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Sec1;
