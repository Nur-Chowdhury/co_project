import BusinessPlan from '@/components/services/BusinessPlan'
import TaxPlan from '@/components/services/TaxPlan'
import React from 'react' 


export default function page() {
    return (
        <div className=' my-6 lg:my-12 mx-[10%] lg:mx[20%] flex flex-col gap-12 lg:gap-24'>
            <div id='tax-planning'><TaxPlan /></div>
            <div id='business-plan'><BusinessPlan /></div>
        </div>
    )
}
