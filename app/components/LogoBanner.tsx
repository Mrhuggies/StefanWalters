'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/BACP-Logo---59348-2.webp', alt: 'BACP', width: 120 },
  { src: '/images/Certified-Brainspotting-Therapist.webp', alt: 'Certified Brainspotting Therapist', width: 100 },
  { src: '/images/Lloyds-Of-London-Logo.webp', alt: 'Lloyds of London', width: 120 },
  { src: '/images/acpnl_logo.webp', alt: 'ACPNL', width: 100 },
  { src: '/images/albany-centre-coporate-logo1.webp', alt: 'Albany Centre', width: 120 },
  { src: '/images/iceeftlogo.webp', alt: 'ICEEFT', width: 100 },
  { src: '/images/logo-Paramount.webp', alt: 'Paramount', width: 120 },
];

export default function LogoBanner() {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative">
        <div className="flex animate-scroll gap-16 whitespace-nowrap">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div 
              key={`logo-1-${index}`} 
              className="flex-shrink-0 flex items-center justify-center h-16"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div 
              key={`logo-2-${index}`} 
              className="flex-shrink-0 flex items-center justify-center h-16"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
