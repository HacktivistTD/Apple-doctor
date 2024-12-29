import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faWhatsapp, faInstagram, faFacebook, faTiktok, faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="text-white py-6 px-4 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-white">
          {isMounted && (
            <>
              <a href="https://www.apple.com/app-store/" aria-label="App Store" className="px-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faAppStore} size="xl" className="px-3" />
              </a>
              <a href="https://play.google.com/store" aria-label="Google Play" className="px-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faGooglePlay} size="xl" className="px-3" />
              </a>
            </>
          )}
        </div>

        <nav className="flex flex-wrap justify-center md:justify-start text-white">
          <a href="/terms" className="px-2 hover:text-yellow-400">T & C</a>
          <a href="/privacy-policy" className="px-2 hover:text-yellow-400">Privacy Policy</a>
          <a href="/contact" className="px-2 hover:text-yellow-400">Contact Us</a>
          <a href="/careers" className="px-2 hover:text-yellow-400">Careers</a>
        </nav>

        <div className="font-bold mt-4 md:mt-0 text-purple-400">
          <p className="text-sm">
            Copyright {new Date().getFullYear()} - Apple Doctor.<br />
            All rights reserved - Realisation: "HACKTIVIST"<br />
            Using this website means you accept our terms and conditions.
          </p>
        </div>

        <div className="flex mt-4 md:mt-0 text-white">
          {isMounted && (
            <>
              <a href="https://www.youtube.com" aria-label="YouTube" className="mx-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faYoutube} size="xl" />
              </a>
              <a href="https://www.whatsapp.com" aria-label="WhatsApp" className="mx-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faWhatsapp} size="xl" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="mx-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a href="https://www.facebook.com" aria-label="Facebook" className="mx-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>
              <a href="https://www.tiktok.com" aria-label="TikTok" className="mx-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faTiktok} size="xl" />
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
