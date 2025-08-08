function Navbar({ page, setPage }) {
    return (<>
        <div className="flex justify-between h-20 w-full bg-zinc-100 items-center relative z-4 ">
            <div className="pl-15 flex justify-start font-sans font-semibold text-2xl hover:cursor-pointer ">Web Devloper Landing</div>
            <div className="pr-15 flex justify-end gap-x-8 font-medium">
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('home')}>Home</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('portfolio')}>Portfolio</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('contact')}>Contact</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p onClick={() => setPage('about')}>About</p></span>
            </div>
        </div>

    </>);
}

export default Navbar;