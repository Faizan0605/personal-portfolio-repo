import img1 from '../../assets1/web-developer-19.webp' 
import img2 from '../../assets1/web-developer-15.webp' 
function Sec2() {
    return ( <div className="bg-black h-300 relative bottom-30 flex flex-col justify-center items-center">
        <div className="flex justify-around items-center">
            <div>
                <img src={img1} alt="Web development" className="w-full h-full object-cover "></img>
                <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>    
            </div>
            <div> 
                <img src={img2} alt="Web development" className="w-full h-full object-cover "></img>
                <p className='text-zinc-200 text-xl font-bold mx-7 my-5'>DSFASFASDFAF</p>
                <button className='border-amber-300 border-2 text-amber-300 py-2 px-5 mx-7'>VIEW PROJECT</button>
            </div>
        </div>
       
    </div> );
}

export default Sec2;