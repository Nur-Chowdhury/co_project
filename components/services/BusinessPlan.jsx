"use client"

import React from 'react'
import { motion } from "framer-motion";


export default function BusinessPlan() {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <motion.div 
                className=' order-1 flex'
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <img
                    src={"/image/businessplan.png"}
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
                <h1 className=' text-2xl font-bold'>Business Plan</h1>
                <p>
                    A business plan is a written document that describes your business. It covers objectives, strategies, sales, marketing 
                    and financial forecasts.
                </p>
                <p>
                    A business plan helps you to clarify your business idea, spot potential problems, set out your goals and measure your progress.
                </p>
                <p>
                    You will need a business plan if you want to secure investment or obtain a loan from a bank.
                </p>
                <p>
                    A business plan can also help to convince customers, suppliers and potential employees to support you.                
                </p>
                <p>
                    We can also help you to monitor how your performance compares with what was documented in your plan.                
                </p>
            </motion.div>
            
        </div>
    )
}
