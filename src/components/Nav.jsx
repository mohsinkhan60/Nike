import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

export const Nav = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  // console.log(toggleNavbar);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 fixed top-0 w-80 h-screen bg-white flex-col z-[900000] 
              shadow-lg lg:relative lg:w-fit lg:h-auto lg:flex-row lg:shadow-none lg:bg-transparent transition-all duration-500 ${
            toggleNavbar ? "right-0" : "-right-full lg:right-0"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setToggleNavbar(!toggleNavbar)}
          className="lg:hidden cursor-pointer z-[900001]"
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
