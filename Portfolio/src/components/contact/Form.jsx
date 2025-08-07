import img from '../../assets/webdev-06.webp';
function Form() {
    return ( <>
        <div className="bg-black w-full h-screen flex flex-col items-center relative">

            <div className=" absolute  bg-amber-300 w-3/4 h-full flex justify-center bottom-0">
                <div className=" w-1/2 h-full flex flex-col justify-center items-center overflow-hidden">
                    <img src={img} alt="Web development" className="w-full h-full object-cover relative top-20"></img>
                </div>
                <div className="w-1/2 h-full bg-white flex flex-col justify-center px-15">
                    <p className='text-black text-6xl mt-6 font-bold '>Let's Build</p>
                    <p className='text-black text-6xl mt-1 font-bold'>Something</p>
                    <p className=' my-7 text-zinc-500'>Fill this form to contact me</p>
                    <form className='mt-2'>
                        <input className='bg-zinc-300 text-zinc-600 my-2 py-4 w-full pl-10 placeholder:text-zinc-600 font-bold border-none focus:outline-none' type='name' placeholder='NAME'></input>
                        <input className='bg-zinc-300 text-zinc-600 my-2 py-4 w-full pl-10 placeholder:text-zinc-600 font-bold border-none focus:outline-none' type='email' placeholder='EMAIL ADDRESS'></input>
                        <input className='bg-zinc-300 text-zinc-600 my-2 py-4 w-full pl-10 placeholder:text-zinc-600 font-bold border-none focus:outline-none' type='text' placeholder='MESSAGE'></input>
                        <button className=" bg-amber-300 text-black text-sm mt-10 mr-60 font-bold px-10 py-6 cursor-pointer transition duration-200">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </> );
}

export default Form;