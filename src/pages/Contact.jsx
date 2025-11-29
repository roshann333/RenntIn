import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-4xl grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE — TEXT / QUOTE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            “We’re always here to help.  
            Reach out anytime and we’ll respond as soon as possible.”
          </p>
        </div>

        {/* RIGHT SIDE — SOCIAL ICONS */}
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+919656209105"
            target="_blank"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition w-full justify-center"
          >
            <FaWhatsapp size={28} />
            <span className="text-lg font-medium">WhatsApp</span>
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/ashmal.roshan"
            target="_blank"
            className="flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-pink-600 transition w-full justify-center"
          >
            <FaInstagram size={28} />
            <span className="text-lg font-medium">Instagram</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
