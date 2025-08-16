function Navbar({ page, setPage }) {
    return (<>
        <nav className="flex justify-evenly md:justify-between h-20 w-full bg-zinc-100 items-center relative z-4 ">
            <div className="hidden  pl-15 md:flex justify-start font-sans font-semibold text-2xl hover:cursor-pointer ">Faizan</div>
            {/* <div className="pl-15 flex justify-start font-sans font-semibold text-2xl hover:cursor-pointer md:hidden ">F</div> */}
            <div className="md:pr-15 flex justify-end gap-x-8 font-medium">
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('home')}>Home</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('portfolio')}>Portfolio</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('contact')}>Contact</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('about')}>About</p></span>
            </div>
        </nav>

    </>);
}

export default Navbar;