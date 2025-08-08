import Image from "next/image";


export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row-reverse md:justify-evenly items-center shadow-2xl">
            <div className="relative w-2/3 h-64 md:w-3/10 md:h-[400px] mt-2 ">
                <Image 
                    src={'/NewMiddlePathLogo.png'}
                    alt="Middle Path Logo"
                    fill
                    className=""
                />
            </div>
            <div className="bg-stone-100 md:bg-inherit pt-5 pb-5 flex flex-col align-middle rounded-2xl mb-10 md:pb-0 md:mt-2">
                <h1 className="text-4xl md:text-5xl text-green-900 text-center m-8 mt-0 mb-0 font-semibold">No subscriptions.</h1>
                <h1 className="text-4xl md:text-5xl text-green-900 text-center m-8 mt-0 mb-0 font-semibold">Balanced websites.</h1>
                <h1 className="text-4xl md:text-5xl text-green-900 text-center m-8 mt-0 mb-0 font-semibold">Peace of mind.</h1>
            </div>
        </section>
    );
}