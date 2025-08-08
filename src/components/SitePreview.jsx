import Image from "next/image";

export default function SitePreview({title, imageSrc, siteUrl}) {
    return (
        <div>
            <p className="text-green-900 text-xl mb-5 text-center font-semibold">{title}</p>
            <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-64 h-64 rounded-lg overflow-hidden transform hover:scale-105 transition shadow-2xl"
            title={`Visit ${title}`}
            >
                <Image
                    src={imageSrc}
                    alt={`${title} screenshot`}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                />
            </a>
        </div>
    );
}