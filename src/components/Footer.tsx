import Image from "next/image";

export default function Footer(){
    return (
        <footer className="bg-gray">
            <div className="container">
                <div className="flex-none pt-10 mb-20">
                    <Image src={"/logo.svg"} alt={"Logo"} width={76} height={41} />
                </div>

                <div className="mb-10">
                    <div className="flex justify-between items-center text-right">
                        <div className="flex flex-col items-start">
                            <p className="text-2xl pl-2">BRASSERIE & BAR</p>
                            <div className="flex gap-x-10">
                                <h2 className="leading-20">PUREMENT</h2>
                                <div className="text-start">
                                    <p>A: 500 Terry Francine St.</p>
                                    <p>San Francisco CA 94158</p>
                                    <p>T: 123-456-7890</p>
                                </div>
                            </div>
                        </div>
                        <div>
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
                    </div>
                </div>

                <div className="pb-10">
                    <p>© 2035 by Purement. Powered and secured by Akif</p>
                </div>
            </div>
        </footer>
    )
}