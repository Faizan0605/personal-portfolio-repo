function Footer() {
    return (
        <footer className="w-full flex justify-center items-center bg-black" >
            <div className="flex flex-col md:flex-row justify-center  md:justify-between py-4 w-3/4  md:h-50 text-zinc-200 mt-4 border-t border-b border-amber-300">
                {/* <div className="hidden md:block">
                    <p className="text-base font-bold">Web-Dev</p> 
                </div> */}
                

                <div className="">
                    <div>
                        <p className="text-amber-300 text-base font-bold ">LINKED IN</p>
                        <p className="text-sm">
                            <a
                                href="https://www.linkedin.com/in/faizanh0605"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-300 transition-colors duration-200"
                            >
                                linkedin.com/in/faizanh0605
                            </a>
                        </p>

                    </div>
                    <div>
                        <p className="text-amber-300 text-base font-bold mt-5">GITHUB</p>
                        <p className="text-sm">
                            <a
                                href="https://github.com/Faizan0605"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-300 transition-colors duration-200"
                            >
                                github.com/Faizan0605
                            </a>
                        </p>

                    </div>
                </div>

                <div className="">
                    <div>
                        <p className="text-amber-300 text-base font-bold">EMAIL</p>
                        <p className="text-sm">faizefaizan0605@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-amber-300 text-base font-bold mt-5">PHONE</p>
                        <p className="text-sm">+91-70-8484-8228</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;