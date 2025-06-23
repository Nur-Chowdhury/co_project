"use client"

import React, {useRef} from 'react'
import { FaCheck } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TaxPlan() {
    const sectionRef  = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <motion.div 
            ref={sectionRef}
            className=' grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className=' order-2 lg:order-1 flex flex-col gap-5 text-lg'>
                <h1 className=' text-2xl font-bold'>Tax Planning</h1>
                <p>
                    Taxation refers to the financial contributions individuals and businesses are required to make to the UK government, 
                    covering areas such as income, capital gains, property, and business activities, among others. There are various obligations 
                    that necessitate tax payments, but there are also strategic approaches and planning tools available that can help reduce the 
                    overall tax liability. By utilising effective tax planning, we aim to minimise your tax burden while ensuring compliance with 
                    all relevant regulations.
                </p>
                <h1 className=' text-xl font-semibold'>WE CAN HELP YOU ON:</h1>
                <ul className=' flex flex-col gap-4'>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[20px]' /></div>
                        <p>Income tax</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[20px]' /></div>
                        <p>Capital gain tax</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[20px]' /></div>
                        <p>Inheritance tax</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[20px]' /></div>
                        <p>Trusts and Estates</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[20px]' /></div>
                        <p>Non-domiciliary tax issues</p>
                    </li>
                </ul>
                <p>Every pound of income tax you save means more income at your disposal, every well-planned disposal of assets means minimal 
                    loss of capital gains, and every inheritance tax saving means more benefit for your beneficiaries. Call us today for a 
                    personal tax planning review. </p>
            </div>
            <div className=' order-1 lg:order-2 flex justify-center items-center overflow-hidden relative'>
                <motion.img
                    src='/image/taxplanning.png'
                    className=' rounded-xl max-h-[500px] w-full' 
                    style={{y}}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 15,
                    }}
                />
            </div>
        </motion.div>
    )
}
