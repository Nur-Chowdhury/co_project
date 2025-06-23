"use client"

import React from 'react'
import { motion } from "framer-motion";

export default function Bookkeeping() {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-x-hidden'>
            <motion.div 
                className=' order-1 flex'
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <img
                    src={"/image/bookkeeping.png"}
                    className=' rounded-xl max-h-[500px] w-full'
                />
            </motion.div>
            <motion.div 
                className=' order-2 flex flex-col gap-5 text-lg'
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className=' text-2xl font-bold'>Bookkeeping</h1>
                <p>
                    Managing your business’s bookkeeping can be time-consuming, complex, and expensive. It involves recording the financial effects 
                    of all transactions—purchases, sales, receipts, and payments—and often distracts from your core business activities. 
                    In-house bookkeeping also requires dedicated staff, ongoing training, and management, adding to your administrative burden.
                </p>
                <p>
                    As your business grows, so does the demand for accurate and efficient bookkeeping. That’s where we come in.
                </p>
                <p>
                    Outsource your bookkeeping to our experienced team and free up valuable time and resources. We handle all your bookkeeping 
                    needs, whether it’s processing paper transactions or using our software to manage scanned and emailed records.
                </p>
                <p>
                    Our service is designed to save your time, effort, and money, allowing you to focus on what matters most growing your business.
                </p>
            </motion.div>
        </div>
    )
}
