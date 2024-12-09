import { useState, useEffect } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handler to close the menu when resizing to a larger screen
  const handleResize = () => {
    // Check if the window width is greater than 700px and the menu is open
    if (isMenuOpen && window.innerWidth > 1024) {
      setIsMenuOpen(!isMenuOpen); // Close the menu if the screen width is larger than 700px
    }
  };

  useEffect(() => {
    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]); // Dependency array ensures the effect is re-run when isMenuOpen changes

  return (
<header className="padding-x py-8 relative z-10 w-full">
<nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        {/* Main Navigation Links (desktop) */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
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
        {/* Desktop Sign in / Explore Links */}
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        {/* Hamburger Icon (mobile) */}
        <div className="hidden max-lg:block" onClick={toggleMenu}>
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="max-lg:block relative w-full bg-white shadow-lg">

          <ul className="flex flex-col items-center py-4">
            {navLinks.map((item) => (
              <li key={item.label} className="py-2">
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-slate-gray"
                  onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-2 text-lg leading-normal font-medium font-montserrat py-4">
            <a href="/" onClick={() => setIsMenuOpen(false)}>Sign in</a>
            <span>/</span>
            <a href="/" onClick={() => setIsMenuOpen(false)}>Explore now</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
