import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { resetData } from "../../../redux/orebiSlice";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector((state) => state.orebiReducer.products);
  const name = useSelector((state) => state.orebiReducer.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetData());
    localStorage.clear();
    navigate("/signin");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full items-center sticky top-0 z-50 bg-primeColor">
      <div className="flex bg-primeColor text-white h-[60px] md:h-[80px] relative justify-between">
        <div className="flex items-center justify-between md:m-4">
          <Link to={"/"}>
            <div className="pt-6 pb-4">
              <Image
                className="w-[80px] md:w-[220px] object-cover"
                imgSrc={logo}
              />
            </div>
          </Link>
        </div>

        {/* Main Menu for Desktop */}
        <div className="hidden md:flex grow relative items-center">
          <Search />
          <nav className="flex items-center justify-center space-x-4">
            <Link to="/shop" className="hover:text-orange-400">
              Shop
            </Link>
            <Link to="/about" className="hover:text-orange-400">
              About
            </Link>
            <Link to="/contactUs" className="hover:text-orange-400">
              Contact Us
            </Link>
            <Link to="/terms&services" className="hover:text-orange-400">
              Terms & Services
            </Link>
          </nav>
        </div>

        <div className="flex items-center mx-2 md:m-4">
          {name.length > 0 ? (
            <Menu
              className="flex"
              menuButton={
                <MenuButton>
                  <div className="flex px-4">
                    <div className="text-xs xl:text-sm">
                      Hello,
                      <br />
                      <span>{name}</span>
                    </div>
                  </div>
                </MenuButton>
              }
              transition
            >
              <MenuItem className="flex justify-between">
                <MdAccountCircle className="mr-2" size="20" />
                {name}
              </MenuItem>
              <MenuItem className="flex justify-between" onClick={handleLogout}>
                <SlLogout className="mr-2" size="18" />
                Logout
              </MenuItem>
            </Menu>
          ) : (
            <div className="px-4 hidden md:flex">
              <Link to="/signin">
                <div className="text-xs xl:text-sm">
                  Hello,
                  <br />
                  <span>Sign In</span>
                </div>
              </Link>
            </div>
          )}
          <Link to={"/cart"} className="md:flex hidden">
            <div className="flex px-1 md:px-3 justify-center">
              <FaShoppingCart className="h-[32px] md:h-[48px]" />
              <div className="relative">
                <div className="absolute font-bold m-2 text-orange-400">
                  {cart.length > 0 ? cart.length : 0}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>

          {/* Hamburger Icon for Mobile View */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu}>
              <FaBars className="text-white h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-primeColor text-white p-4 mt-1 space-y-4">
          {/* <Search /> */}
          <Link to="/shop" onClick={toggleMenu}>
            Shop
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contactUs" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link to="/terms&services" onClick={toggleMenu}>
            Terms & Services
          </Link>
          <Link to={"/cart"}>
            <div className="flex px-1 md:px-3 justify-start">
              <FaShoppingCart className="h-[32px] md:h-[48px]" />
              <div className="relative">
                <div className="absolute font-bold m-2 text-orange-400">
                  {cart.length > 0 ? cart.length : 0}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      )}

      {/* Search Bar for Mobile */}
      <div className="flex md:hidden grow relative items-center pb-2">
        <Search />
      </div>
    </header>
  );
};

export default NavBar;
