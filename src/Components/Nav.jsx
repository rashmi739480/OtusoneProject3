import React, { useState } from "react";

const NavbarLinks = [
  { title: "Home", path: "/", id: 1 },
  { title: "About", path: "/about", id: 2 },
  { title: "Doctor Login/Register", path: "/service", id: 3 },
  { title: "Search for Doctors", path: "/contact-us", id: 4 },
  { title: "Contact Us", path: "/", id: 5 },
  { title: "Blog", path: "/", id: 6 },
  { title: "Guest Post", path: "/", id: 7 },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-md md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      {/* Logo */}
      <div className="mt-2">
        <img src="/Images/logo.webp" alt="Logo" className="h-10 md:h-12" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-lg md:static md:block md:w-auto`}
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-500"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="hidden md:flex flex-col items-end font-semibold">
        <p className="text-gray-600 text-sm">+91 959 900 5673</p>
        <p className="text-gray-600 text-sm">+1 917 730 8298</p>
      </div>
    </nav>
  );
};

export default Nav;



