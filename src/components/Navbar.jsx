import React, { useState } from "react";
import { Menu } from "lucide-react"; // Hamburger icon
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='z-50 sticky top-0 font-["Roboto"] bg-[#fdfdfd] border-b-2 border-[#0000000d]'>
      <div className="flex justify-between items-center px-6 lg:px-[20rem] py-[2.5rem] text-gray-500">
        {/* Logo */}
        <div className="logo">
          <Link to={"/"}>
          <img
            className="w-[10rem] lg:w-[12rem]"
            src="./media/Zerodha-Logo.svg"
            alt="Zerodha Logo"
          /></Link>
        </div>

        {/* Hamburger Menu Icon for small to md screens */}
        <div className="lg:hidden">
          <Menu
            size={32}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Menu Items - Visible on lg and above */}
        <ul className="hidden lg:flex gap-[5rem] text-[1.5rem] font-[400]">
          <li>
            <NavLink className={(e)=> {return e.isActive ?"text-blue-500":""}} to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> {return e.isActive ?"text-blue-500":""}} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> {return e.isActive ?"text-blue-500":""}} to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> {return e.isActive ?"text-blue-500":""}} to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> {return e.isActive ?"text-blue-500":""}} to="/support">Support</NavLink>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu - Visible only below lg when isOpen is true */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-4 lg:hidden bg-[#fdfdfd] text-[1.3rem] font-[400] py-4 border-t border-[#0000000d]">
          <li className="text-[2rem] mb-[1rem] text-gray-500">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="text-[2rem] mb-[1rem] text-gray-500">
            <Link to="/about">About</Link>
          </li>
          <li className="text-[2rem] mb-[1rem] text-gray-500">
            <Link to="/product">Product</Link>
          </li>
          <li className="text-[2rem] mb-[1rem] text-gray-500">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="text-[2rem] mb-[1rem] text-gray-500">
            <Link to="/support">Support</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
