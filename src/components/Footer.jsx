import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
        <p>© {new Date().getFullYear()} Imperial Cars. Locação de carros importados.</p>
        <p>Contato: contato@imperialcars.com</p>
      </div>
    </footer>
  );
};

export default Footer;