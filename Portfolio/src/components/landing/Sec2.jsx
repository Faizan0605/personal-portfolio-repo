import webImage from "../../assets/webdev-04-2.webp"

function Sec2() {
    return (<>
        <div className="bg-amber-300 h-350 flex flex-col items-center justify-center">
            <div className="w-1/2 mt-20 h-full  flex items-start justify-between ">
                <div className="w-1/2 mx-5 flex flex-col items-end justify-end ">
                    <div className="h-4 w-full bg-black mb-5 relative top-2" ></div>
                    <h1 className="text-5xl text-zinc-800 font-bold mt-1 py-3 hover:w-full hover:text-right hover:bg-black hover:text-white">WordPress</h1>
                    <h1 className="text-5xl text-zinc-800 font-bold mt-1 py-3 hover:w-full hover:text-right hover:bg-black hover:text-white">React</h1>
                    <h1 className="text-5xl text-zinc-800 font-bold mt-1 py-3 hover:w-full hover:text-right hover:bg-black hover:text-white">MongoDb</h1>
                    <h1 className="text-5xl text-zinc-800 font-bold mt-1 py-3 hover:w-full hover:text-right hover:bg-black hover:text-white">Node js</h1>
                    <h1 className="text-5xl text-zinc-800 font-bold mt-1 py-3 hover:w-full hover:text-right hover:bg-black hover:text-white">PHP</h1>
                    <h1 className="text-5xl text-zinc-800 font-bold mt-1 py-3 hover:w-full hover:text-right hover:bg-black hover:text-white">CSS</h1>
                </div>
                <div className="w-1/2 mx-5 ">
                    <h1 className="text-lg font-medium text-zinc-800 mb-2">Background</h1>
                    <p className="text-sm mb-5 text-zinc-600">Turpis quisque sem consectetur tells. Egestas fringilla sollicitudin sed ametemper. Euismod id diam eu est.</p>
                    <h1 className="text-lg font-medium text-zinc-800 mb-2">Education</h1>
                    <p className="text-sm mb-5 text-zinc-600">Turpis quisque sem consectetur tells. Egestas fringilla sollicitudin sed ametemper. Euismod id diam eu est.</p>
                </div>
            </div>
            <div className="w-full h-900 overflow-hidden">
                <img
                    src={webImage}
                    alt="Web development"
                    className="w-full h-full object-cover scale-110 relative top-10"
                />
            </div>


        </div>

    </>);
}

export default Sec2;