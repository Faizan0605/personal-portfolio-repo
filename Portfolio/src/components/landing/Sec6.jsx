import img from '../../assets/web-developer-9.webp';
function Sec6() {
    return ( <>
        <div className="bg-black w-full h-screen flex flex-col items-center relative">
            <div className="relative z-1 top-30"><h1 className="text-amber-300 text-8xl font-bold">Wordpress Site</h1></div>

            <div className=" absolute w-3/4 h-full flex justify-center bottom-0">
                <div className="bg-zinc-200 w-1/2 h-full flex flex-col justify-center items-center">
                    <img src={img} alt="Web development" className="w-6/7 h-1/2 object-contain relative top-20 filter grayscale"></img>
                    <button className=" bg-black text-zinc-200 text-sm mt-35 mr-60 font-bold px-10 py-6">LIVE DEMO</button>
                </div>
                <div className="w-1/2 h-full"></div>
            </div>

        </div>
    </> );
}

export default Sec6;