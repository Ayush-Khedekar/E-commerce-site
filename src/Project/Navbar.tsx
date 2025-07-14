// import React from 'react';
// import "./Navbar.css"; // Style applied once

const navItems = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-10 list-none p-[10px 20px] justify-end">
        {navItems.map((item, index) => (
          <li
            key={index}
            className=" text-blue-700 cursor-pointer text-[0.957rem] font-bold hover:text-orange-500 hover:underline hover:decoration-2 transition-text-3's p-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
