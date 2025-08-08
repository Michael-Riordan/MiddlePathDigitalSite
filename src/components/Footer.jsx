import Image from "next/image";
import {FaFacebook} from "react-icons/fa"

export default function Footer() {
    return (
        <div className="flex gap-10 bg-[#fdfbf9] mt-10 justify-center">
            <Image 
                src={'/NewMiddlePathLogo.png'}
                alt="middle path logo"
                width={150}
                height={150}
            />
            <a href="https://facebook.com/MiddlePathDigital" target="blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-blue-600 w-6 h-6 hover:text-blue-800 mt-16" />
            </a>
        </div>
    );
}