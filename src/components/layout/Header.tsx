import { Link } from "react-router-dom";
import icon from "/icon.png";
import HamburgerIcon from "../ui/HamburgerIcon";
import { useState } from "react";
const Header = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  return (
    <header className="pt-4 mx-auto w-[90%] flex justify-between items-center relative">
      <Link to={"/"}>
        <img src={icon} className="w-[80px] lg:w-[100px]" alt="logo" />
        <h1 className="italic font-bold text-lg lg:text-2xl text-wine">
          Amor Rendezvous
        </h1>
      </Link>

      <nav>
        <ul
          className={`${
            isHamburgerClicked
              ? "flex bg-wine lg:bg-transparent py-4 lg:py-0"
              : "hidden lg:flex"
          }
             rounded-md  absolute lg:static w-full top-full -left-0 flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-normal text-white lg:text-wine font-bold`}
        >
          <li>
            <Link to={"/"}>Features</Link>
          </li>
          <li>
            <Link to={"/"}>Pricing</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="bg-appBg lg:bg-none lg:bg-wine text-wine lg:text-white rounded-lg p-2 flex items-center justify-center w-[90px]"
            >
              Sign up
            </Link>
          </li>
        </ul>

        <HamburgerIcon
          onClick={() => setIsHamburgerClicked((prev) => !prev)}
          isHamburgerClicked={isHamburgerClicked}
        />
      </nav>
    </header>
  );
};

export default Header;
