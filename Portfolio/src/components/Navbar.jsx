import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router';

function Navbar({ page, setPage }) {
    const location = useLocation();

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
                <Link
                    to="/"
                    className={`hover:text-zinc-600 hover:cursor-pointer ${location.pathname === '/' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => setPage('home')}
                >
                    Home
                </Link>
                <Link
                    to="/portfolio"
                    className={`hover:text-zinc-600 hover:cursor-pointer ${location.pathname === '/portfolio' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => setPage('portfolio')}
                >
                    Portfolio
                </Link>
                <Link
                    to="/contact"
                    className={`hover:text-zinc-600 hover:cursor-pointer ${location.pathname === '/contact' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => setPage('contact')}
                >
                    Contact
                </Link>
                <Link
                    to="/about"
                    className={`hover:text-zinc-600 hover:cursor-pointer ${location.pathname === '/about' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => setPage('about')}
                >
                    About
                </Link>
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
                <Link
                    to="/"
                    className={`hover:text-zinc-600 cursor-pointer ${location.pathname === '/' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => { setPage("home"); setMenuOpen(false); }}
                >
                    Home
                </Link>
                <Link
                    to="/portfolio"
                    className={`hover:text-zinc-600 cursor-pointer ${location.pathname === '/portfolio' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => { setPage("portfolio"); setMenuOpen(false); }}
                >
                    Portfolio
                </Link>
                <Link
                    to="/contact"
                    className={`hover:text-zinc-600 cursor-pointer ${location.pathname === '/contact' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => { setPage("contact"); setMenuOpen(false); }}
                >
                    Contact
                </Link>
                <Link
                    to="/about"
                    className={`hover:text-zinc-600 cursor-pointer ${location.pathname === '/about' ? 'text-blue-600 font-medium' : ''
                        }`}
                    onClick={() => { setPage("about"); setMenuOpen(false); }}
                >
                    About
                </Link>
            </div>

        </nav>



    </>);
}

export default Navbar;