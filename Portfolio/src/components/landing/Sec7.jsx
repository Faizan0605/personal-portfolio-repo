import img from '../../assets/webdev-06.webp';
function Sec7() {
    return ( <>
        <div className="bg-black w-full h-screen flex flex-col items-center relative">

            <div className=" absolute  bg-amber-300 w-3/4 h-full flex justify-center bottom-0">
                <div className=" w-1/2 h-full flex flex-col justify-center items-center overflow-hidden">
                    <img src={img} alt="Web development" className="w-full h-full object-cover relative top-20"></img>
                </div>
                <div className="w-1/2 h-full bg-zinc-200 flex flex-col justify-center px-15">
                    <p className='text-black text-6xl mt-6 font-bold '>Let's Build</p>
                    <p className='text-black text-6xl mt-1 font-bold'>Something</p>
                    <p className='text-black text-xl mt-7'>Fill this form to contact me</p>
                    <form className='mt-2'>
                        <input className='bg-zinc-400 my-2 py-4 w-full pl-10'  placeholder='NAME'></input>
                        <input className='bg-zinc-400 my-2 py-4 w-full pl-10'  placeholder='EMAIL ADDRESS'></input>
                        <input className='bg-zinc-400 my-2 py-4 w-full pl-10'  placeholder='MESSAGE'></input>
                        <button className=" bg-amber-300 text-black text-sm mt-10 mr-60 font-bold px-10 py-6">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </> );
}

export default Sec7;