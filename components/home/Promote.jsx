"use client"

import React from 'react'
import { motion } from "framer-motion";

export default function Promote() {
    return (
        <motion.div 
            className=' w-full mx-auto my-20 flex flex-col items-center justify-center gap-6'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className=' text-blue-400 italic text-xl'>Why Choose Ali & Co Accountants?</div>
            <div className=' text-4xl font-bold'>Your Financial Partner</div>
            <p className=' mx-4 sm:mx-16 md:mx-32 lg:mx-96 text-center text-xl'>
                At Ali & Co Accountants, we make managing your finances easy. Whether you need help with personal taxes or business accounts, 
                we’re here to guide you and take the stress out of the process.
            </p>
            <div className=' w-[90%] lg:w-[80%] flex flex-col md:flex-row gap-6'>
                <div className=' px-4 py-2 flex flex-row gap-4 justify-center items-center rounded-xl shadow-xl shadow-gray-300 
                    dark:shadow-gray-800 transition-all duration-500 hover:scale-105'>
                    <img src={'/image/service.png'} className=' w-[50px] h-[50px] rounded-full' />
                    <div className=' flex flex-col gap-2'>
                        <span className=' text-2xl font-semibold'>Flexible Solutions</span>
                        <p>
                            Everyone’s finances are different. That’s why we create solutions that fit your specific needs and goals.
                        </p>
                    </div>
                </div>
                <div className=' px-4 py-4 flex flex-row gap-4 justify-center items-center rounded-xl shadow-xl shadow-gray-300 
                    dark:shadow-gray-800 transition-all duration-500 hover:scale-105'>
                    <img src={'/image/cheap.png'} className=' w-[50px] h-[50px] rounded-full' />
                    <div className=' flex flex-col gap-2'>
                        <span className=' text-2xl font-semibold'>Affordable Services</span>
                        <p>
                            We provide great service at a price that works for you. Save money and time with our expert help.
                        </p>
                    </div>
                </div>
                <div className=' px-4 py-2 flex flex-row gap-4 justify-center items-center rounded-xl shadow-xl shadow-gray-300 
                    dark:shadow-gray-800 transition-all duration-500 hover:scale-105'>
                    <img src={'/image/help.png'} className=' w-[50px] h-[50px] rounded-full' />
                    <div className=' flex flex-col gap-2'>
                        <span className=' text-2xl font-semibold'>Personalized Support</span>
                        <p>
                            You’ll get one-on-one attention from our team. We’re here to listen, understand, and help you succeed.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
