export default function Nav() {
    return (
        <nav className="bg-background py-2  w-full z-100">
            <div className="flex justify-between items-center text-right container">
                <h1>PUREMENT</h1>
                <ul>
                    <li>
                        <a href="#" className="uppercase active:opacity-30">Home</a>
                    </li>
                    <li>
                        <a href="#menu" className="uppercase active:opacity-30">Menu</a>
                    </li>
                    <li>
                        <a href="#about" className="uppercase active:opacity-30">About</a>
                    </li>
                    <li>
                        <a href="#" className="uppercase active:opacity-30">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="uppercase active:opacity-30">Book a table</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}