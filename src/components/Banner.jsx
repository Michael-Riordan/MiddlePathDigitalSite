'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


export default function Banner() {
    const [showBanner, setShowBanner] = useState(true);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {

        setMounted(true); // router is safe to use after mount
    
    }, []);

    useEffect(() => {
        if (!mounted) return; // wait for client mount

        console.log(pathname)

        if (pathname === "/EmailForm") {
            setShowBanner(false);
            return;
        }

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
        
    }, [mounted, pathname]);

    if (!showBanner) return null;


    return (
        <div className={`fixed top-0 left-0 w-full bg-green-700 text-white text-center py-3 shadow-md z-50 transform transition-transform duration-500 ease-in-out ${
        showBanner ? "translate-y-0" : "-translate-y-full"
      }`}>
            <p>Email us Today!</p>
            <Link href="/EmailForm">
                <span className="underline cursor-pointer">Contact Now</span>
            </Link>
        </div>
    );
}