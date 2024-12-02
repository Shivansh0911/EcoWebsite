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
            ? 'text-skyblue font-bold hover:underline'
            : 'text-skyblue hover:underline';

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50">
            {/* Desktop and Tablet View */}
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div id="logo" className="flex-shrink-0">
                    <img className="w-32 md:w-36" src={Logo} alt="Logo" />
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:grid grid-flow-col auto-cols-max gap-4 text-sm lg:text-base xl:text-lg justify-end items-center w-full">
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
                    <li className="whitespace-nowrap">
                        <NavLink to="best-paper-awards" className={linkStyles} onClick={handleLinkClick}>
                            Best Paper Awards
                        </NavLink>
                        <div className="text-xs leading-none">
                            & Publication Opportunities
                        </div>
                    </li>
                    <li>
                        <NavLink to="preconference" className={linkStyles} onClick={handleLinkClick}>
                            Pre-Conference
                        </NavLink>
                        <div className="text-xs leading-none">Workshop</div>
                    </li>
                    <li>
                        <NavLink to="registration" className={linkStyles} onClick={handleLinkClick}>
                            Registration
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        id="menu-btn"
                        className="text-skyblue focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
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
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden fixed inset-0 bg-white text-skyblue text-xl z-50 flex flex-col items-center justify-start pt-10 transition-transform duration-500 ease-in-out ${
                    menuOpen ? 'block' : 'hidden'
                }`}
            >
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

                <ul className="w-full mt-10 space-y-4 text-center">
                    {[
                        'Home',
                        'About',
                        'Leadership',
                        'Speakers',
                        'Submission',
                        'Best Paper Awards',
                        'Pre-Conference Workshop',
                        'Registration',
                    ].map((item, idx) => (
                        <li
                            key={idx}
                            className="border-b border-blue-500 w-full text-center py-4"
                        >
                            <NavLink
                                to={item.toLowerCase().replace(/ /g, '-')}
                                className={linkStyles}
                                onClick={handleLinkClick}
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
