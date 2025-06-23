import TaxReturn from '@/components/services/TaxReturn'
import VatReturn from '@/components/services/VatReturn'
import React from 'react' 


export default function page() {
    return (
        <div className=' my-6 lg:my-12 mx-[10%] lg:mx[20%] flex flex-col gap-12 lg:gap-24'>
            <div id='vat-return'><VatReturn /></div>
            <div id='tax-return'><TaxReturn /></div>
        </div>
    )
}
