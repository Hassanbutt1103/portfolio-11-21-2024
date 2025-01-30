import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Background = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/cntrl_1103/",
      label: "Instagram Profile",
      icon: <InstagramIcon fontSize="large" />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=61568305221772",
      label: "Facebook Profile",
      icon: <FacebookIcon fontSize="large" />,
    },
    {
      href: "https://github.com/Hassanbutt1103",
      label: "GitHub Profile",
      icon: <GitHubIcon fontSize="large" />,
    },
    {
      href: "https://www.linkedin.com/in/hassan-butt-web-developer-a4a821241/",
      label: "LinkedIn Profile",
      icon: <LinkedInIcon fontSize="large" />,
    },
    {
      href: "https://x.com/Hassanbutt4342",
      label: "X (Twitter) Profile",
      icon: <XIcon fontSize="large" />,
    },
  ];

  return (
    <div className="font-sans text-gray-300 py-6 relative">
      {/* Social Media Icons */}
      <div className="flex space-x-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Background;
