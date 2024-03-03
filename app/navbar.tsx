"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "/",
            label: "home",
        },
        {
            id: 2,
            link: "about",
            label: "about",
        },
        {
            id: 3,
            link: "projects",
            label: "projects",
        },
        {
            id: 4,
            link: "resume",
            label: "resume",
        },
    ];

    return (
        <div className="z-50 flex items-center justify-between h-20 px-10 text-white bg-black nav">
            <div>
                <h1 className="ml-2 text-3xl font-signature">
                    <a className="link-underline link-underline-black" href="/" rel="noreferrer">
                        AT.
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, label }) => (
                    <li key={id} className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer nav-links hover:scale-105 hover:text-white link-underline">
                        <Link href={link}>{label}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
                    {links.map(({ id, link, label }) => (
                        <li key={id} className="px-4 py-6 text-4xl capitalize cursor-pointer">
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
