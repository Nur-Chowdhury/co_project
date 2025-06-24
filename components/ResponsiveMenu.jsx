"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";

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

export default function ResponsiveMenu({ showMenu, onClose }) {
    const pathname = usePathname();
    const [servicesOpen, setServicesOpen] = useState(false);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <div
            className={`fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col justify-start bg-slate-950 px-8 pb-6 pt-6 text-white transition-all duration-200 md:hidden ${
                showMenu ? "left-0" : "-left-[100%]"
            }`}
        >
            <Link href="/"><div className=" w-full text-center text-3xl font-bold text-blue-600 dark:text-blue-500 cursor-pointer py-12">Logo</div></Link>
        
            <ul className="flex flex-col gap-6 text-xl font-semibold">
                {menuItems.map((item) => {
                    if (item.label === "Services") {
                        return (
                            <li key={item.label}>
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex w-full items-center justify-between text-left hover:text-blue-400"
                                >
                                    <span className={isActive(item.href) ? "text-blue-400" : ""}>
                                        {item.label}
                                    </span>
                                    <FaCaretDown
                                        className={`transition-transform duration-200 ${
                                            servicesOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {servicesOpen && (
                                    <ul className="mt-2 flex flex-col gap-2 border-l border-gray-700 pl-4">
                                        {dropMenuItems.map((dropItem) => (
                                            <li key={dropItem.label}>
                                                <Link
                                                    href={dropItem.href}
                                                    onClick={onClose}
                                                    className={`block hover:text-blue-400 ${
                                                        isActive(dropItem.href)
                                                            ? "text-blue-400"
                                                            : ""
                                                    }`}
                                                >
                                                    {dropItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    }

                    return (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                onClick={onClose}
                                className={`block hover:text-blue-400 ${
                                    isActive(item.href) ? "text-blue-400" : ""
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
