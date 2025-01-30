import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Background = () => {
  return (
    <div className="relative flex flex-col items-center justify-center font-sans text-gray-300 py-6">
      {/* Other content... */}

      {/* Social Media Icons */}
      <div className="absolute left-8 sm:left-24 sm:bottom-[-40px] bottom-0 flex space-x-6 sm:space-x-10">
        <a
          href="https://www.instagram.com/cntrl_1103/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition duration-200"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61568305221772"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-600 transition duration-200"
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/Hassanbutt1103"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition duration-200"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-butt-web-developer-a4a821241/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition duration-200"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://x.com/Hassanbutt4342"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-gray-300 transition duration-200"
        >
          <XIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Background;
