import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faWhatsapp, faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="py-4 mt-10 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* First section */}
        <div className="flex items-center text-white hover:text-yellow-400 transition-colors duration-300">
          <p className="text-xl font-bold">Join With Us.</p>
        </div>

        {/* Copyright Notice */}
        <div className="text-center font-bold mt-4 md:mt-0 text-yellow-400">
          <p className="text-sm">
             Copyright 2024 - Taprobana Cab Service.<br />
            All rights reserved - Realisation: HACKTIVIST<br />
            Using this website means you accept our terms and conditions.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex mt-4 md:mt-0 text-white">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className='mx-2 hover:text-yellow-400 transition-colors duration-300'>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className='mx-2 hover:text-yellow-400 transition-colors duration-300'>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className='mx-2 hover:text-yellow-400 transition-colors duration-300'>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Like us on Facebook" className='mx-2 hover:text-yellow-400 transition-colors duration-300'>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className='mx-2 hover:text-yellow-400 transition-colors duration-300'>
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
