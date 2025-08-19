function Header() {
    const hire = '🤙 Hire Me';
    return (
        <>
            <header className="flex justify-between p-8 max-w-[1000px] mx-auto w-full">
                <div href="/">
                    <h1 className="text-xl sm:text-3xl md:text-4xl text-black">David Nathanson</h1>
                    <span className="subtitle">
                        Open to startups, SWE internships, and research
                    </span>
                </div>
                <button
                    className="card-button-secondary px-4 py-2 rounded-2xl whitespace-nowrap opacity-0 pointer-events-none text-sm lg:text-xl">
                    {hire}
                </button>
                {/* Actual Visible Button */}
                <a href="#hire">
                    <div className="fixed top-8 right-8 z-999">
                        <button className="card-button-secondary px-4 py-2 rounded-2xl whitespace-nowrap text-sm lg:text-xl">
                            {hire}
                        </button>
                    </div>
                </a>
            </header>
        </>
    )
}

export default Header;