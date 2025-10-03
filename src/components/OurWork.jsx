'use client'

import { motion } from "framer-motion";
import SitePreview from "./SitePreview";

export default function OurWork() {
    const sitePreviews = [
        {
            title: 'Musician Website Demo',
            imageSrc: '/web-screenshot-honey.jpeg',
            siteUrl: 'https://honey-marmalade.vercel.app',
        },
        {
            title: 'Live Handyman Website',
            imageSrc: '/mjr2screenshot.jpeg',
            siteUrl: 'https://mjrsquaredllc.com',
        },
        {
            title: 'Notary Website',
            imageSrc: '/LR-screenshot.jpeg',
            siteUrl: 'https://LRMobileNotary.com',
        },
    ];

    return (
        <section className="bg-[#fdfbf9]" id="our-work">
            <div className="mt-10">
                <h1 className="text-green-900 text-4xl font-semibold text-center mb-10">
                    Our Work
                </h1>

                <div className="flex flex-col md:flex-row justify-center md:justify-evenly md:m-20 text-center items-center gap-10">
                    {sitePreviews.map((site, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                            className="rounded-lg overflow-hidden cursor-pointer"
                        >
                            <SitePreview 
                                title={site.title}
                                imageSrc={site.imageSrc}
                                siteUrl={site.siteUrl}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}