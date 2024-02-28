import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MENU_HANDLER } from "../redux/menuSlice";
import { navButtonHamburgerData } from "../utils/nav-button-data";

const HamburgerMenu = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const dispatch = useDispatch();
  const [active, setActive] = useState();

  return (
    <>
      {isMenuOpen && (
        <div className="fixed w-screen h-screen bg-[#eec6c6] z-50 top-30">
          <ul className="flex flex-col item-center justify-center pt-5 text-xl text-center">
            {navButtonHamburgerData.map((button) => {
              const { id, label, path } = button;

              return (
                <li className="py-7" key={id}>
                  <Link to={path}>
                    <h3
                      className={
                        active === label 
                          ? "active-link nav-heading"
                          : "nav-heading"
                      }
                      onClick={() => {
                        setActive( label );
                        dispatch(MENU_HANDLER());
                      }}
                    >
                      {label}
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
