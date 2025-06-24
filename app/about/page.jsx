"use client"

import React from 'react'
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { motion } from "framer-motion";

export default function page() {

    return (
        <div className=' my-6 md:my-8 mx-[10%] lg:mx[20%] flex flex-col'>
            <div className=' flex flex-col items-center justify-center gap-2'>
                <h1 className=' my-4 text-center text-5xl font-bold'>About Us</h1>
                <div className=' h-[2px] w-[180px] bg-blue-500 mb-4'></div>
            </div>
            <div className=' my-6 grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className=' order-2 md:order-1 flex flex-col gap-5'>
                    <p >
                        Ali & Co Accountants is a mid-sized accounting and advisory firm specialising in helping small and medium-sized businesses. 
                        Our goal is to be a trusted partner in your business, supporting you in achieving your goals and maximizing success. 
                        We handle all your personal, business, tax, and financial information with the highest level of confidentiality and respect. 
                        We also aim to respond to your calls, emails, and requests for information where possible within 24 hours of receiving it.
                    </p>
                    <p>
                        We believe in offering friendly, efficient, and clear communicative services. Our commitment is to exceed your expectations
                         by listening to your needs and delivering results. We work closely with you to provide tailored solutions that drive your 
                         business forward.
                    </p>
                    <div className=' mt-2 flex flex-col gap-2'>
                        <motion.div 
                            className=' flex gap-6 text-3xl font-semibold' 
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <MdOutlineSettingsSuggest />
                            <h1>Our Accrediation</h1>
                        </motion.div>
                        <p>Our quality and experienced team has been accrediated by renowned bodies.</p>
                    </div>
                    <motion.img
                        src={'/image/abc.png'}
                        className=' max-w-[175px] max-h[100px]' 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true, amount: 0.8 }}
                    />
                </div>
                <div className=' order-1 md:order-2 flex justify-center items-center'>
                    <img
                        src={"/image/about.png"}
                        className=' rounded-xl' 
                    />
                </div>
            </div>
        </div>
    )
}
