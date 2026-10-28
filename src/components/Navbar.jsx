import React from "react";
import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition ${
    isActive ? "bg-amber-500 text-black" : "text-gray-300 hover:text-white"
  }`;

const Navbar = () => {
  return (
    <header className="bg-black border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-amber-500 tracking-wide">
          Imperial Cars
        </Link>
        <div className="flex gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/carros" className={linkClass}>
            Carros
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;