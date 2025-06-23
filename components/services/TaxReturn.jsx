"use client"

import React from 'react'
import { motion } from "framer-motion";


export default function TaxReturn() {
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
                    src={"/image/tax.png"}
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
                <h1 className=' text-2xl font-bold'>Tax Return</h1>
                <p>
                    Tax return must be completed to declare your income to HMRC whether it is sole trader, partnership or limited company along 
                    with accurate tax liability. 
                </p>
                <p>
                    Unfortunately, not submitting tax returns on time can result in huge amount of penalties and interest imposed by HM Revenue 
                    & Customs. It is very important to ensure that nothing is left behind its deadline.
                </p>
                <p>
                    We will help you to calculate your tax liability, prepare and submit your annual self assessment tax returns to HM Revenue and 
                    Customs after using tax reliefs and tax planning in order to minimize your tax liability.
                </p>
                <p>
                    We also prepare and file your corporation tax returns and maintain your tax records and deal with HM Revenue & Customs on your 
                    behalf. We can provide you with advice on your tax position and the planning opportunities available which would help you to 
                    grow your business efficiently.
                </p>
            </motion.div>
        </div>
    )
}
