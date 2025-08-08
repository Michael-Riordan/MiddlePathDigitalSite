import Image from "next/image";

export default function Nav() {
    return (
        <nav className="flex shadow-md p-4 justify-between">
            <div className="flex w-screen justify-between">
                <a
                    href="/">
                    <Image 
                        src={"/MiddlePathFlower.png"}
                        width={50}
                        height={50}
                        alt="Middle Path Digital Logo"
                    />
                </a>
                <button 
                    className="rounded-3xl p-2 md:p-5 bg-green-900 text-white cursor-pointer md:mr-10 mt-2"
                >
                    <a href="tel:+16316171415" className="md:align-middle font-semibold md:text-xl">Contact Us</a>
                </button>
            </div>
        </nav>
    );
}

{/* bg-stone-100*/}