import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { currentYear } from "../utils/functions";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex justify-around py-16 px-56 bg-[#fae9e6]">
        <div className="w-full">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-80 hover:scale-105" />
        </Link>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col font-serif text-lg gap-1">
            <h2 className="font-julius text-4xl mb-4 font-bold">Links</h2>
            <Link to="products" className="hover:text-rose-900">Shop</Link>
            <Link to="/" className="hover:text-rose-900">Home</Link>
            <Link to="about" className="hover:text-rose-900">About Us</Link>
            <Link to="signin" className="hover:text-rose-900">Signin</Link>
          </div>
          <div className="flex flex-col font-serif text-lg gap-1">
            <h2 className="font-julius text-4xl mb-4 font-bold">Connect</h2>
            <a href="mailto: khushi.johri01@gmail.com" className="hover:text-rose-900">Email</a>
          </div>
        </div>
      </div>

      <div className="flex justify-around py-8 bg-black text-white">
        <p className="font-mono">
          Copyright &copy; {currentYear()} Designed by Khushi Johri
        </p>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/girlifycoder" className="hover:scale-110">
            <i class="fa-brands fa-instagram text-xl"></i>
          </a>
          <a href="https://www.facebook.com/khushi.johri01" className="hover:scale-110">
            <i class="fa-brands fa-facebook text-xl"></i>
          </a>
          <a href="https://twitter.com/khushijohri01?s=08" className="hover:scale-110">
            <i class="fa-brands fa-twitter text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/khushi-johri-b74970202" className="hover:scale-110">
            <i class="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="https://github.com/khushijohri2001" className="hover:scale-110">
            <i class="fa-brands fa-github text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
