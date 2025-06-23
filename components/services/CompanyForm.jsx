"use client"

import React, {useRef} from 'react'
import { FaCheck } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CompanyForm() {
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
                <h1 className=' text-2xl font-bold'>Company Formation</h1>
                <p>
                    Most people starting up in business have a good business proposition and commitment. However, they may not be experts in the 
                    legal and financial aspects of running a business. We can help your business with all-out support of company formation.
                </p>
                <h1 className=' text-xl font-semibold'>WE WILL HELP YOU TO:</h1>
                <ul className=' flex flex-col gap-4'>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[24px]' /></div>
                        <p>Choose most suitable structure for your business such as sole trader, partnership, limited liability partnership or limited company.</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[24px]' /></div>
                        <p>Complete any registration process with Companies House and HM Revenue & Customs.</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[24px]' /></div>
                        <p>Open a business bank account with your chosen bank.</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[24px]' /></div>
                        <p>Prepare a business plan, cash flow projection and trading forecasts.</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[24px]' /></div>
                        <p>Set up a recording system for your internal use in line with meeting statutory requirements.</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[24px]' /></div>
                        <p>Keep on top bookkeeping, payroll, VAT and other accounting requirements.</p>
                    </li>
                    <li className=' flex gap-3 items-center'>
                        <div className=''><FaCheck className=' h-full text-blue-500 text-[24px]' /></div>
                        <p>Use our address as the registered address for your company to ensure all important documents come straight to us to 
                            deal with on your behalf straight away without incurring any additional charge.</p>
                    </li>
                </ul>
                <p>Make sure you choose the right option to start your business. </p>
            </div>
            <div className=' order-1 lg:order-2 flex justify-center items-center overflow-hidden relative'>
                <motion.img
                    src='/image/comform.png'
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
