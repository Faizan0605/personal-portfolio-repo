import img from '../../assets/web-developer-2.webp';

export default function Sec5() {
    return (
        <div className="bg-black w-full h-screen flex flex-col items-center p-0 m-0 relative">
            <div className="relative top-30 z-1">
                <h1 className="text-amber-300 text-8xl font-bold">Back End</h1>
            </div>

            {/* This will now take full height of the parent (h-screen) */}
            <div className="absolute w-3/4 h-full flex justify-center m-0">
                <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* Optional content */}
                    <p className="text-white">Content Coming Soon...</p>
                </div>
                <div className="w-1/2">
                    <img src={img} alt="Web development" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
