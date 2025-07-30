function Navbar({ pagename }) {
    return (<>
        <div className="flex justify-between h-20 w-full bg-zinc-100 items-center relative z-4 ">
            <div className="pl-15 flex justify-start font-sans font-semibold text-2xl hover:cursor-pointer ">Web Devloper Landing</div>
            <div className="pr-15 flex justify-end gap-x-8 font-medium">
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p>Landing</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p>Home</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p>Portfolio</p></span>
                <span className="hover:text-zinc-600 hover:cursor-pointer"><p>Contact</p></span>
            </div>
        </div>

    </>);
}

export default Navbar;