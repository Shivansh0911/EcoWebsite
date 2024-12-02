import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/logo.jpg'; // Adjust the path to your logo image

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenuOnOutsideClick = (event) => {
        if (
            event.target.closest('#mobile-menu') === null &&
            event.target.closest('#menu-btn') === null
        ) {
            setMenuOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', closeMenuOnOutsideClick);
        return () => {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        };
    }, []);

    const linkStyles = ({ isActive }) =>
        isActive
            ? "text-skyblue font-bold"
            : "text-skyblue";

    // Close the menu after clicking a link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo Section */}
                <div id="logo" className="flex-shrink-0">
                    <img className="w-36" src={Logo} alt="Logo" />
                </div>

                {/* Hamburger Menu for Mobile View */}
                <div className="md:hidden">
                    <button
                        id="menu-btn"
                        className="text-skyblue focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            // Cross icon when the menu is open
                            <svg
                                className="w-8 h-8 absolute top-5 right-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            // Hamburger icon when the menu is closed
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Links for larger screens */}
                <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-sm lg:text-base xl:text-lg justify-end w-full">
                    <li>
                        <NavLink to="home" className={linkStyles} onClick={handleLinkClick}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="about" className={linkStyles} onClick={handleLinkClick}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="leadership" className={linkStyles} onClick={handleLinkClick}>
                            Leadership
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="speakers" className={linkStyles} onClick={handleLinkClick}>
                            Speakers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="submission" className={linkStyles} onClick={handleLinkClick}>
                            Submission
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="preconference" className={linkStyles} onClick={handleLinkClick}>
                            Pre-Conference Workshop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="registration" className={linkStyles} onClick={handleLinkClick}>
                            Registration
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/best-paper-awards" className={linkStyles} onClick={handleLinkClick}>
    Best Paper Awards
</NavLink>

                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden fixed inset-0 bg-white text-skyblue text-2xl z-50 flex flex-col items-center justify-start pt-10 transition-transform duration-500 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}
            >
                {/* Cross icon in mobile menu */}
                <button
                    className="absolute top-5 right-5"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

                <ul className="w-full mt-10">
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="home" className={linkStyles} onClick={handleLinkClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="about" className={linkStyles} onClick={handleLinkClick}>
                            About
                        </NavLink>
                    </li>
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="leadership" className={linkStyles} onClick={handleLinkClick}>
                            Leadership
                        </NavLink>
                    </li>
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="speakers" className={linkStyles} onClick={handleLinkClick}>
                            Speakers
                        </NavLink>
                    </li>
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="submission" className={linkStyles} onClick={handleLinkClick}>
                            Submission
                        </NavLink>
                    </li>
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="preconference" className={linkStyles} onClick={handleLinkClick}>
                            Pre-Conference Workshop
                        </NavLink>
                    </li>
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="registration" className={linkStyles} onClick={handleLinkClick}>
                            Registration
                        </NavLink>
                    </li>
                    <li className="border-b border-blue-500 w-full text-center py-4">
                        <NavLink to="bestpaperawards" className={linkStyles} onClick={handleLinkClick}>
                            Best Paper Awards
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
