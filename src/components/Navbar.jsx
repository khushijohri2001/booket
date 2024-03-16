import React, { useState } from "react";
import { logo } from "../assets";
import { Link, NavLink } from "react-router-dom";
import Badge from "./Badge";
import { navButtonData } from "../utils/nav-button-data";
import { NavlinkButton } from "./Buttons";
import { FILTER_BY_SEARCH } from "../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { MENU_HANDLER } from "../redux/menuSlice";
import { animateScroll as scroll } from "react-scroll";
import { ACTIVE_LINK_HANDLER } from "../redux/activeLinkSlice";

const Navbar = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const { totalItemQuantity } = useSelector((store) => store.cart);
  const wishList = useSelector((store) => store.wishlist.wishList);
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const active = useSelector((store) => store.activeLink.active);

  return (
    <div className="flex justify-between items-center py-3 gap-2 bg-[#fae9e6] px-12 shadow-md max-sm:px-4 max-sm:py-1 max-sm:justify-normal ">
      <div className="max-sm:flex-1">
        <Link to="/">
          <img
            src={logo}
            alt="Booklet Logo"
            className="w-28 hover:scale-105 max-sm:w-20"
            onClick={() => {
              scroll.scrollToTop(0);
              dispatch(ACTIVE_LINK_HANDLER("home"));
            }}
          />
        </Link>
      </div>

      <div className="flex items-center justify-center h-24 max-sm:h-16">
        <div
          className=" relative flex items-center justify-center"
          onMouseOver={() => setShowMessage(true)}
          onMouseOut={() => setShowMessage(false)}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border-0 flex-grow rounded-l-3xl py-1 px-6 w-[32rem] bg-white focus:outline-0 max-sm:hidden max-md:hidden 
            max-lg:hidden max-xl:w-80"
            onChange={(event) => dispatch(FILTER_BY_SEARCH(event.target.value))}
          />
          <i className="fa-solid fa-magnifying-glass cursor-pointer border-0 flex-grow rounded-r-3xl py-2 pr-6 bg-white max-lg:bg-transparent max-lg:pr-0 max-lg:py-0 max-sm:text-xl"></i>
        </div>

        {/* pop message */}
        <div
          className={`absolute -bottom-10 left-72 bg-rose-400 text-white p-6 shadow-inner rounded transition ease-in-out delay-500 ${
            showMessage ? "opacity-100" : "opacity-0"
          } max-sm:text-sm max-sm:p-2 max-sm:left-56 max-md:left-80 max-lg:left-52 max-xl:left-60 `}
        >
          <i className="fa-solid fa-sort-up text-rose-400 rounded absolute -top-2 left-4 text-3xl"></i>
          <p className="font-bold">Feature Coming Soon</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center justify-around gap-1 max-sm:hidden">
          {navButtonData.map((btnInfo) => (
            <NavlinkButton key={btnInfo.id} btnInfo={btnInfo} active={active} />
          ))}
        </div>

        <div className="my-0 mx-2 hover:scale-105">
          <Badge badgeContent={wishList.length}>
            <NavLink to="/wishlist">
              <i className="fa-regular fa-heart text-xl "></i>
            </NavLink>
          </Badge>
        </div>

        <div className="my-0 mx-2 hover:scale-105">
          <NavLink to="/cart">
            <Badge badgeContent={totalItemQuantity}>
              <i className="fa-solid fa-cart-shopping text-xl"></i>
            </Badge>
          </NavLink>
        </div>
      </div>

      <div className="hidden max-sm:block">
        {isMenuOpen ? (
          <i
            className="menu-icons fas fa-xmark"
            onClick={() => dispatch(MENU_HANDLER())}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars text-xl"
            onClick={() => dispatch(MENU_HANDLER())}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
