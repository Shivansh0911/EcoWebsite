import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

export function MyNavbar() {
    const location = useLocation();

    return (
        <Navbar fluid rounded className="bg-blue-200 fixed top-0 w-full z-10 flex items-center">
            {/* Logo on the left */}
            <Navbar.Brand href="https://flowbite-react.com" className="flex items-center">
                <img src='/logo.png' alt='BPHC' className="h-10" />
            </Navbar.Brand>

            {/* Toggle button for mobile view */}
            <Navbar.Toggle className="block md:hidden" />

            {/* Links container */}
            <div className="ml-auto flex md:items-center"> {/* Use ml-auto to push links to the right */}
                <Navbar.Collapse className="hidden md:flex md:items-center">
                    {/* Add margin to links for spacing */}
                    <Navbar.Link
                        as={Link}
                        to="/"
                        className={`mr-6 text-lg font-semibold tracking-wider hover:text-blue-500 ${location.pathname === "/" ? "text-blue-500 font-bold" : "text-black"}`}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        as={Link}
                        to="/about"
                        className={`mr-6 text-lg font-semibold tracking-wider hover:text-blue-500 ${location.pathname === "/about" ? "text-blue-500 font-bold" : "text-black"}`}
                    >
                        About
                    </Navbar.Link>
                    <Navbar.Link
                        as={Link}
                        to="/leadership"
                        className={`mr-6 text-lg font-semibold tracking-wider hover:text-blue-500 ${location.pathname === "/leadership" ? "text-blue-500 font-bold" : "text-black"}`}
                    >
                        Leadership
                    </Navbar.Link>
                    <Navbar.Link
                        as={Link}
                        to="/speakers"
                        className={`mr-6 text-lg font-semibold tracking-wider hover:text-blue-500 ${location.pathname === "/speakers" ? "text-blue-500 font-bold" : "text-black"}`}
                    >
                        Speakers
                    </Navbar.Link>
                    <Navbar.Link
                        as={Link}
                        to="/submission"
                        className={`mr-6 text-lg font-semibold tracking-wider hover:text-blue-500 ${location.pathname === "/submission" ? "text-blue-500 font-bold" : "text-black"}`}
                    >
                        Submission
                    </Navbar.Link>
                    <Navbar.Link
                        as={Link}
                        to="/registration"
                        className={`text-lg font-semibold tracking-wider hover:text-blue-500 ${location.pathname === "/registration" ? "text-blue-500 font-bold" : "text-black"}`}
                    >
                        Registration
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default MyNavbar;
