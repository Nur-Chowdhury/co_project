import AccountsPrep from '@/components/services/AccountsPrep'
import Bookkeeping from '@/components/services/Bookkeeping'
import React from 'react'

export default function page() {
    return (
        <div className=' my-6 lg:my-12 mx-[10%] lg:mx[20%] flex flex-col gap-12 lg:gap-24'>
            <div id='accounts'><AccountsPrep /></div>
            <div id='bookkeeping'><Bookkeeping /></div>
        </div>
    )
}
