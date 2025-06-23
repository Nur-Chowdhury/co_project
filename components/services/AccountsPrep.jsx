"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function AccountsPrep() {
    return (
        <motion.div 
            className=' grid grid-cols-1 lg:grid-cols-2 gap-12'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className=' order-2 lg:order-1 flex flex-col gap-5 text-lg'>
                <h1 className=' text-2xl font-bold'>Accounts Preparation</h1>
                <p>
                    Accurate and up-to-date financial information is the cornerstone of a successful business.
                </p>
                <p>Our comprehensive accounting services include the preparation of full statutory accounts and abbreviated accounts, 
                    tailored to meet your business’s specific requirements. Additionally, we provide monthly or quarterly management accounts to 
                    support your decision-making process.
                </p>
                <p>
                    We are committed to delivering accounts within agreed timescales and deadlines, ensuring you always have reliable data when you
                     need it. Beyond reporting past performance, we analyse your financials to identify opportunities for growth and strategies to 
                     minimize tax liabilities.
                </p>
                <p>
                    Our team ensures compliance with all relevant reporting regulations and presents financial information in a clear, 
                    straightforward manner. We also provide actionable recommendations, helping you make informed decisions to enhance your 
                    business’s performance.
                </p>
            </div>
            <div className=' order-1 lg:order-2 flex'>
                <img
                    src={"/image/accprep.png"}
                    className=' rounded-xl'
                />
            </div>
        </motion.div>
    )
}