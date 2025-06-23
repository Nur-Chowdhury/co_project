import CompanyForm from '@/components/services/CompanyForm'
import Payroll from '@/components/services/Payroll'
import React from 'react' 


export default function page() {
    return (
        <div className=' my-6 lg:my-12 mx-[10%] lg:mx[20%] flex flex-col gap-12 lg:gap-24'>
            <div id='company-formation'><CompanyForm /></div>
            <div id='payroll-pension'><Payroll /></div>
        </div>
    )
}
