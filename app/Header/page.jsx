import React from "react";
import { Open_Sans } from "next/font/google";
import Link from "next/link";


const opensans = Open_Sans({
    subsets: ["latin"],
    weight: ["800"],
    variable: "--font-opensans",
    fallback: ["sans-serif"],
});
const Header = () => {
    return (
        <div className={`h-36 ${opensans.variable}`}>
            <header
                className={`border-gray-200 bg-purple-main ${opensans.className} text-xl font-extrabold`}
            >
                {/* <nav className="bg-white "> */}
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-36">
                    <a
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://www.infomin.solutions/static/images/1627800844248.png"
                            className="h-24 pl-14"
                            alt="Flowbite Logo"
                        />
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`hidden w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-purple-main md:bg-purple-main dark:border-gray-700">
                            <li><Link href="/">
                                <div
                                    className="block pb-2 md:bg-transparent md:text-[#29b7dd] dark:text-white md:dark:text-[#29b7dd] border border-[#29b7dd] border-t-0 border-l-0 border-r-0 border-b-2"
                                    aria-current="page"
                                >
                                    HOME
                                </div></Link>
                            </li>
                            <li><Link href="/AboutUs">
                                <div
                                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    ABOUT US
                                </div></Link>
                            </li>
                            <li><Link href="/HireUs">
                                <div
                                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    HIRE US
                                </div></Link>
                            </li>
                            <li><Link href="/">
                                <div
                                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    VCET
                                </div></Link>
                            </li>
                            {/* <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Contact
                                    </a>
                                </li> */}
                        </ul>
                    </div>
                </div>
                {/* </nav> */}
            </header>
        </div>
    );
};

export default Header;
