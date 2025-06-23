"use client"

import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

export default function VatReturn() {

    const sectionRef  = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <motion.div 
            ref={sectionRef}
            className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div 
                className=' order-2 lg:order-1 hidden lg:flex flex-col gap-5 text-lg'
                style={{y}}
                transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 15,
                }}
            >
                <h1 className=' text-2xl font-bold'>VAT Return</h1>
                <p>
                    We provide expert advice on VAT registration, helping you determine whether registration is required or beneficial for your 
                    business. Should you decide to proceed, we will handle the application on your behalf. Additionally, we ensure that your VAT 
                    returns are completed accurately and submitted on time, helping you avoid any potential penalties.
                </p>
            </motion.div>
            <div 
                className=' order-2 lg:order-1 flex flex-col lg:hidden gap-5 text-lg'
            >
                <h1 className=' text-2xl font-bold'>VAT Return</h1>
                <p>
                    We provide expert advice on VAT registration, helping you determine whether registration is required or beneficial for your 
                    business. Should you decide to proceed, we will handle the application on your behalf. Additionally, we ensure that your VAT 
                    returns are completed accurately and submitted on time, helping you avoid any potential penalties.
                </p>
            </div>
            <div className=' order-1 lg:order-2 flex justify-center items-center overflow-hidden relative'>
                <img
                    src='/image/vat.png'
                    className=' rounded-xl h-[500px] w-full' 
                />
            </div>
        </motion.div>
    )
}
