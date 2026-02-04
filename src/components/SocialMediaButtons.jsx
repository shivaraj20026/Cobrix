import React from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialMediaButtons = () => {
  const socialLinks = [
    {
      icon: <FaPhone />,
      href: "tel:+91 78990 59851", // Replace with your actual phone number
      label: "Call us"
    },
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/YOUR_PAGE", // Replace with your Facebook page URL
      label: "Facebook"
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/YOUR_PROFILE", // Replace with your Instagram profile URL
      label: "Instagram"
    },
    {
      icon: <FaWhatsapp />,
      href: "+91 78990 59851", // Replace with your WhatsApp number
      label: "WhatsApp"
    }
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <div key={index} className="relative group">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                bg-[rgb(56,75,54)]
                text-white
                w-[50px] h-[50px]
                flex items-center justify-center
                rounded-full
                shadow-lg
                transition-all duration-300
                hover:bg-[hsl(0,0%,0%)]
                relative
                border-2 border-[rgb(71,102,85)]
              `}
              aria-label={link.label}
            >
              <span className="text-xl relative z-10">
                {link.icon}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaButtons; 
