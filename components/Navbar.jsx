"use client";

import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "News & Resources", href: "/news" },
    { label: "Contact", href: "/contact" },
];

const dropMenuItems = [
    { label: "Accounts Preparation", href: "/accounts-and-bookkeeping/#accounts" },
    { label: "Bookkeeping", href: "/accounts-and-bookkeeping/#bookkeeping" },
    { label: "Company Formation", href: "/company-formation-with-payroll-pension/#company-formation" },
    { label: "Payroll & Pension", href: "/company-formation-with-payroll-pension/#payroll-pension" },
    { label: "Tax Planning", href: "/tax-planning-and-business-plan/#tax-planning" },
    { label: "Business Plan", href: "/tax-planning-and-business-plan/#business-plan" },
    { label: "Vat Return", href: "/vat-return-and-tax-return/#vat-return" },
    { label: "Tax Return", href: "/vat-return-and-tax-return/#tax-return" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);
    const [bg, setBg] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    
    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    useEffect(() => {
        setBg(pathname === '/');
    }, [pathname]);

    return (
        <div className={`w-full px-[5%] py-6  flex justify-between items-center ${bg ? "": "bg-gray-200 dark:bg-gray-800"}`}>
            <Link href="/"><div className="text-3xl font-bold text-blue-600 dark:text-blue-500 cursor-pointer">Logo</div></Link>

            <div className="hidden md:block">
                <ul className="flex items-center gap-10 text-xl font-semibold">
                    {menuItems.map((item) => {
                        if (item.label === "Services") {
                            return (
                                <li key={item.label} className="group relative cursor-pointer">
                                    
                                        <Link
                                            href={item.href}
                                            className={`hover:text-blue-600 dark:hover:text-blue-500 ${
                                                isActive(item.href) ? "text-blue-600 dark:text-blue-500" : ""
                                            }`}
                                        >
                                            <div className="flex items-center gap-1">
                                                {item.label}
                                                <FaCaretDown className="text-lg transition-all duration-200 group-hover:rotate-180" />
                                            </div>
                                        </Link>
                                    <div className="w-[190px] absolute z-[10000] hidden bg-blue-500 dark:bg-blue-950 text-white shadow-lg group-hover:block left-[-20px]">
                                        <div className="flex flex-col gap-1 text-base">
                                            {dropMenuItems.map((dropItem) => (
                                                <Link
                                                    key={dropItem.label}
                                                    href={dropItem.href}
                                                    className={`px-4 py-1 hover:bg-blue-950 dark:hover:bg-blue-500 ${
                                                        isActive(dropItem.href) ? "bg-blue-950 dark:bg-blue-500" : ""
                                                    }`}
                                                >
                                                    {dropItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            );
                        }

                        return (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={`hover:text-blue-600 dark:hover:text-blue-500 ${
                                        isActive(item.href) ? "text-blue-600 dark:text-blue-500" : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className=" flex gap-4 justify-center items-center">
                <ThemeToggle />
                <div className=" md:hidden">
                    {showMenu ? (
                        <HiMenuAlt1
                            onClick={toggleMenu}
                            className=" cursor-pointer transition-all"
                            size={30}
                        />
                    ) : (
                        <HiMenuAlt3
                            onClick={toggleMenu}
                            className="cursor-pointer transition-all"
                            size={30}
                        />
                    )}
                </div>
            </div>

            
            <ResponsiveMenu showMenu={showMenu} onClose={() => setShowMenu(false)} />
        </div>
    );
}
