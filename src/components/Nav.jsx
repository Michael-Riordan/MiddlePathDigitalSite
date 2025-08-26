'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [showBanner, setShowBanner] = useState(true);

    // Hide banner on scroll past 600px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setShowBanner(false);
            } else {
                setShowBanner(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // check initial scroll
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full z-50">
            {/* Banner - NOT sticky, scrolls away */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white text-center py-3 shadow-md"
                    >
                        <p className="text-lg md:text-xl font-semibold flex flex-col md:flex-row justify-center items-center gap-2">
                            <span>Email us Today!</span>
                            <Link href="/EmailForm">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block bg-white text-green-700 font-bold px-5 py-2 rounded-full shadow-md hover:bg-green-100 hover:shadow-lg cursor-pointer"
                                >
                                    Contact Now
                                </motion.span>
                            </Link>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Nav - STICKY at the top */}
            <motion.nav
                className="sticky top-0 w-full bg-white shadow-lg z-50"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center"
                    >
                        <Image 
                            src="/MiddlePathFlower.png"
                            width={50}
                            height={50}
                            alt="Middle Path Digital Logo"
                            className="rounded-full"
                        />
                        <span className="ml-2 text-green-900 font-bold text-xl md:text-2xl">
                            Middle Path Digital
                        </span>
                    </motion.a>

                    <motion.a
                        href="tel:+16316171415"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-3xl bg-green-900 text-white font-semibold md:text-lg px-6 py-2 md:py-3 cursor-pointer shadow-md"
                    >
                        Call Now
                    </motion.a>
                </div>
            </motion.nav>
        </div>
    );
}