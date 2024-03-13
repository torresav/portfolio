"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

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
        /*
        {
            id: 3,
            link: "projects",
            label: "projects",
        }, */
        {
            id: 3,
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
        <div className="flex items-center justify-between h-20 px-8 text-white bg-black md:px-32 nav">
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
            <button onClick={() => setNav(!nav)} className="z-20 flex flex-col items-center justify-center md:hidden">
                <span
                    className={`bg-white block transition-all duration-300 ease-out
                            h-0.5 w-6 rounded-sm ${nav ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
                            `}></span>
                <span
                    className={`bg-white block transition-all duration-300 ease-out
                            h-0.5 w-6 rounded-sm my-0.5 ${nav ? "opacity-0" : "opacity-100"}
                            `}></span>
                <span
                    className={`bg-white block transition-all duration-300 ease-out
                            h-0.5 w-6 rounded-sm ${nav ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
                            `}></span>
            </button>
            <ul className={`${nav ? "translate-y-0 " : "-translate-y-full"} absolute top-0 left-0 z-10 flex flex-col items-center justify-center overflow-hidden w-full pb-4 transition-all duration-200 ease-in-out text-stone-200 bg-neutral-900 pt-14`}>
                {links.map(({ id, link, label }) => (
                    <li key={id} className="px-4 py-4 text-2xl capitalize cursor-pointer">
                        <Link onClick={() => setNav(!nav)} href={link}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
