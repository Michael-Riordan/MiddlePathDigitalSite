import SitePreview from "./SitePreview";

export default function OurWork() {
    return (
        <section className="bg-[#fdfbf9]">
            <div className="mt-10">
                <h1 className="text-green-900 text-4xl font-semibold text-center mb-10">Our Work</h1>
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly md:m-20 text-center items-center gap-10">
                    <SitePreview 
                        title={'Musician Website Demo'}
                        imageSrc={'/web-screenshot-honey.jpeg'}
                        siteUrl={'https://honey-marmalade.vercel.app'}

                    />
                    <SitePreview 
                        title={'Live Handyman Website'}
                        imageSrc={'/mjr2screenshot.jpeg'}
                        siteUrl={'https://mjrsquaredllc.com'}
                    />
                </div>
            </div>
        </section>
    );
}