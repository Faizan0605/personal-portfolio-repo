import { useEffect, useState } from "react";

function Navbar({ page, setPage }) {

    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (<>
        <nav className={`flex justify-between w-full bg-white items-center z-50  transition-all duration-300 fixed ${isSticky ? "h-14 shadow-md" : "h-20"}`}>

            <img src='/l.png' className={`ml-12 md:ml-15 transition-all duration-300 ${isSticky ? "h-14" : "h-20"}`}></img>

            <div className="hidden md:pr-15 md:flex justify-end gap-x-8 font-medium">
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('home')}>Home</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('portfolio')}>Portfolio</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('contact')}>Contact</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('about')}>About</p></span>
            </div>


            {/* Mobile Hamburger */}
            <div className="md:hidden mr-12">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col justify-center items-center w-8 h-8 relative"
                >
                    {/* Top bar */}
                    <span
                        className={`block w-8 h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out
        ${menuOpen ? "rotate-45 translate-y-2" : ""}
      `}
                    ></span>

                    {/* Middle bar */}
                    <span
                        className={`block w-8 h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out my-1
        ${menuOpen ? "opacity-0" : "opacity-100"}
      `}
                    ></span>

                    {/* Bottom bar */}
                    <span
                        className={`block w-8 h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out
        ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
      `}
                    ></span>
                </button>
            </div>


            {/* Mobile Dropdown */}
            <div
                className={`absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-50 transform transition-all duration-300 origin-top
                    ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
                <span
                    onClick={() => { setPage("home"); setMenuOpen(false); }}
                    className="hover:text-zinc-600 cursor-pointer">
                    Home
                </span>
                <span
                    onClick={() => { setPage("portfolio"); setMenuOpen(false); }}
                    className="hover:text-zinc-600 cursor-pointer"
                >
                    Portfolio
                </span>
                <span
                    onClick={() => { setPage("contact"); setMenuOpen(false); }}
                    className="hover:text-zinc-600 cursor-pointer"
                >
                    Contact
                </span>
                <span
                    onClick={() => { setPage("about"); setMenuOpen(false); }}
                    className="hover:text-zinc-600 cursor-pointer"
                >
                    About
                </span>
            </div>

        </nav>



    </>);
}

export default Navbar;