
import { useState } from "react";

const navItems = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Active item track

  return (
    <nav>
      <ul className="flex gap-10 list-none p-[10px_20px] justify-end">
        {navItems.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer text-[0.957rem] font-bold p-3 transition-all duration-150 ease-in-out
                ${isActive ? "text-red-600 underline decoration-2" : "text-blue-700 hover:text-orange-500 hover:underline"}
              `}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
