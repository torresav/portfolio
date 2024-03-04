"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
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

    // Function to hide nav on resize
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setNav(false);
        }
    };

    // Set up event listener for window resize
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="z-50 flex items-center justify-between h-20 text-white bg-black nav">
            <div>
                <h1 className="ml-2 text-3xl font-signature">
                    <a className="link-underline link-underline-black" href="/" rel="noreferrer">
                        AT.
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, label }) => (
                    <li key={id} className="px-4 font-medium capitalize duration-200 cursor-pointer text-stone-200 nav-links hover:scale-110 link-underline">
                        <Link href={link}>{label}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full pb-4 text-stone-200 pt-14 bg-neutral-900">
                    {links.map(({ id, link, label }) => (
                        <li key={id} className="px-4 py-4 text-2xl capitalize cursor-pointer">
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
