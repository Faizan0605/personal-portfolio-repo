import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router';

const navLinks = [
    { label: 'Home',      to: '/',          page: 'home' },
    { label: 'Portfolio', to: '/portfolio',  page: 'portfolio' },
    { label: 'Contact',   to: '/contact',   page: 'contact' },
    { label: 'About',     to: '/about',     page: 'about' },
];

function Navbar({ page, setPage }) {
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                aria-label="Main navigation"
                className={`flex justify-between w-full bg-white items-center z-50 transition-all duration-300 fixed ${isSticky ? "h-14 shadow-md" : "h-20"}`}
            >
                <img
                    src='/l.png'
                    alt="FAIZAN"
                    className={`ml-12 md:ml-15 transition-all duration-300 ${isSticky ? "h-14" : "h-20"}`}
                />

                {/* Desktop Links */}
                <ul className="hidden md:pr-15 md:flex justify-end gap-x-8 font-medium list-none">
                    {navLinks.map(({ label, to, page: p }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                aria-current={location.pathname === to ? 'page' : undefined}
                                className={`hover:text-zinc-600 hover:cursor-pointer ${location.pathname === to ? 'text-amber-500 shadow-md font-medium' : ''}`}
                                onClick={() => setPage(p)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden mr-12">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        className="flex flex-col justify-center items-center w-8 h-8 relative"
                    >
                        <span className={`block w-8 h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-8 h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out my-1 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`block w-8 h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <ul
                    role="menu"
                    aria-hidden={!menuOpen}
                    className={`absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-50 transform transition-all duration-300 origin-top list-none
                        ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
                >
                    {navLinks.map(({ label, to, page: p }) => (
                        <li key={to} role="menuitem">
                            <Link
                                to={to}
                                aria-current={location.pathname === to ? 'page' : undefined}
                                className={`hover:text-zinc-600 cursor-pointer ${location.pathname === to ? 'text-blue-600 font-medium' : ''}`}
                                onClick={() => { setPage(p); setMenuOpen(false); }}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    );
}

export default Navbar;