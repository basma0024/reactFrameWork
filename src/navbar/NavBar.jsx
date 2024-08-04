import React, { useEffect, useState } from 'react';
import'./NavBar.css'
import { Link, NavLink } from 'react-router-dom';
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 30) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navClass = scrolling ? "py-4" : "py-8";



    return (
        <nav className={`bg-na fixed top-0 left-0 w-full ${navClass} z-50`}>
            <div className="flex items-center justify-between  max-w-screen-xl mx-auto relative">
                <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-4xl font-semibold whitespace-nowrap dark:text-white text-white ">START FRAMEWORK</span>
                </Link>
                <button 
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none dark:text-white"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only p-5">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`absolute top-full left-0 w-full bg-white bg-na md:static md:flex md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse  bg-na dark:border-gray-700">
                        <li>
                            <NavLink to="/about" className="block  dark:text-white text-xl text-white p-2">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portofolio" className="block  dark:text-white text-xl text-white p-2">Portofolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block p-2  dark:text-white text-xl text-white">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;

