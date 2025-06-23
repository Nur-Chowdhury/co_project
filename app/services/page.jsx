import AccountsPrep from '@/components/services/AccountsPrep'
import Bookkeeping from '@/components/services/Bookkeeping'
import BusinessPlan from '@/components/services/BusinessPlan'
import CompanyForm from '@/components/services/CompanyForm'
import Payroll from '@/components/services/Payroll'
import TaxPlan from '@/components/services/TaxPlan'
import TaxReturn from '@/components/services/TaxReturn'
import VatReturn from '@/components/services/VatReturn'
import React from 'react' 


export default function page() {
    return (
        <div className=' my-6 lg:mt-12 lg:mb-24 mx-[10%] lg:mx[20%] flex flex-col gap-12 lg:gap-24'>
            <div className=' flex flex-col items-center justify-center gap-4'>
                <h1 className='text-5xl font-bold'>Services</h1>
                <div className=' h-[2px] w-[150px] bg-blue-500'></div>
            </div>
            <AccountsPrep />
            <Bookkeeping />
            <CompanyForm />
            <Payroll />
            <TaxPlan />
            <BusinessPlan />
            <VatReturn />
            <TaxReturn />
        </div>
    )
}
