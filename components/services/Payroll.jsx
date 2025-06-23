"use client"

import React from 'react'
import { motion } from "framer-motion";


export default function Payroll() {
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
                    src={"/image/payroll.png"}
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
                <h1 className=' text-2xl font-bold'>Payroll & Pension</h1>
                <p>
                    Payroll is complicated and has to be done on time. As an employer, you are responsible for the mistakes. 
                    We can take the stress away from you and let you get on with running and growing the business.
                </p>
                <p>
                    We will tailor our payroll service to suit you. We will produce pay slips and make BACS payments as required. 
                    We will administer PAYE, National Insurance, Statutory Sick & Maternity Pay, tax credits & student loans as well as bonuses, 
                    commissions and one-off payments. We will complete all statutory paperwork.
                </p>
                <p>
                    Our payroll service is fully compliant with auto enrolment and RTI legislation. We can manage the auto enrolment process for 
                    all our payroll clients and ensure that all reporting obligations are met.
                </p>
            </motion.div>
        </div>
    )
}
