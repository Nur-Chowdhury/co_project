import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
    FaMailBulk,
    FaRegCopyright
} from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";

export default function Footer() {
    return (
        <div className=' bg-gray-200 dark:bg-gray-800 rounded-t-3xl'>
            <section className=' w-full container mx-auto px-4'>
                <div className='grid py-4 md:grid-cols-3'>
                    <div className=" px-4 py-4 ">
                        <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
                            <a href="/" className='text-3xl font-bold text-blue-600 dark:text-blue-500'>
                                LOGO
                            </a>
                        </h1>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Possimus, voluptate.{" "}
                        </p>
                        <br />
                        <div className=" flex items-center gap-3">
                            <a href="#" className="duration-200 hover:scale-105">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#" className="duration-200 hover:scale-105">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#" className="duration-200 hover:scale-105">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
                        <div className=" px-4 py-4">
                            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                                Quick Menu
                            </h1>
                            <ul className={`flex flex-col gap-3 text-lg`}>
                                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[4px]">
                                    Home
                                </li>
                                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[4px]">
                                    About
                                </li>
                                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[4px]">
                                    News & Resources
                                </li>
                                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[4px]">
                                    Contact
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-4 ">
                            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                                Contact Us
                            </h1>
                            <ul className="flex flex-col gap-3 text-lg">
                                <li className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Dhaka, Bangladesh</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaMobileAlt />
                                    <p>+880 XXXXXXXXXX</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <TbDeviceLandlinePhone />
                                    <p>+880 XXXXXXXXXX</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaMailBulk />
                                    <p>abcd@efgh.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-4 ">
                            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                                Social Links
                            </h1>
                            <div className="flex flex-col gap-3">
                                <h1>Subscribe to our newsletter</h1>
                                <input
                                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                                    type="text"
                                    placeholder="Email"
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full bg-black text-white py-4 text-center text-xl font-medium flex justify-center items-center'>
                <FaRegCopyright />
                <span>Copyright 2025 || Nur</span>
            </div>

        </div>
    )
}
