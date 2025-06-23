"use client";

import React, { useEffect, useState } from 'react'
import {FaMoon, FaSun} from 'react-icons/fa';


export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className=' '>
            <button onClick={toggleTheme} variant="outline" size="lg" className=" w-full flex justify-between rounded-full font-bold text-2xl">
                {theme==="light" && <span
                    className={`transition-all duration-500 ease-in-out `}
                >
                    <FaSun />
                </span>}
                {theme==="dark" && <span
                    className={` transition-all duration-500 ease-in-out `}
                >
                    <FaMoon />
                </span>}
            </button>
        </div>
    );
}
