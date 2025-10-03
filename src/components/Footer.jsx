'use client'

import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#fdfbf9] text-green-900 mt-20 shadow-inner">
            <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand / Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <Image 
                        src="/NewMiddlePathLogo.png"
                        alt="Middle Path Digital Logo"
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                    <p className="mt-2 font-semibold text-lg text-center md:text-left">
                        Middle Path Digital — One-Time Cost, Lifetime Ownership
                    </p>
                </div>

                {/* Call-to-Action */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <p className="text-center md:text-right font-medium">
                        Ready to grow your business online?
                    </p>
                    <div className="flex gap-10">
                        <a
                            href="tel:+16316171415"
                            className="bg-green-900 text-white font-semibold px-6 py-3 rounded-3xl shadow-lg hover:bg-green-800 hover:scale-105 transition transform duration-300"
                        >
                            Call Now
                        </a>
                        <a
                            href="/EmailForm"
                            className="bg-green-900 text-white font-semibold px-6 py-3 rounded-3xl shadow-lg hover:bg-green-800 hover:scale-105 transition transform duration-300"
                        >
                            Email Us
                        </a>
                    </div>


                    {/* Social links */}
                    <div className="mt-10 self-center">
                        <a href="https://facebook.com/MiddlePathDigital" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="text-blue-600 w-6 h-6 hover:text-blue-800 transition-colors duration-300" />
                        </a>
                        {/*}
                        <a href="https://www.instagram.com/MiddlePathDigital" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="text-pink-500 w-6 h-6 hover:text-pink-700 transition-colors duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/company/middlepathdigital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="text-blue-700 w-6 h-6 hover:text-blue-900 transition-colors duration-300" />
                        </a>
                        */}
                    </div>
                </div>
            </div>

            <div className="border-t border-green-200 mt-8 pt-4 text-center text-sm text-green-600">
                © {new Date().getFullYear()} Middle Path Digital. All rights reserved.
            </div>
        </footer>
    );
}