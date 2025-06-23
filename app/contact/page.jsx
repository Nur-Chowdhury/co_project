import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileAlt, FaMailBulk } from "react-icons/fa";

export default function page() {
    return (
        <div className=' my-6 md:my-8 mx-[10%] lg:mx[20%] flex flex-col'>
            <div className=' flex flex-col items-center justify-center gap-2'>
                <h1 className=' my-4 text-center text-5xl font-bold'>Contact Us</h1>
                <div className=' h-[2px] w-[180px] bg-blue-500 mb-4'></div>
            </div>
            <div className=' glass px-6 max-w-[1000px] mx-auto flex flex-col md:flex-row place-items-center justify-between frosty-text'>
                <div className=' flex flex-col gap-4 py-2'>
                    <h1 className=' text-2xl font-medium my-4'>Contact Details</h1>
                    <div className=' flex gap-2 text-lg'>
                        <IoLocationSharp size={30} className=' text-blue-500' />
                        <div>
                            <h1 className=' text-xl font-medium'>Address</h1>
                            <p>76-78 Bury Park Road Luton, <br /> Bedfordshire LU1 1HE</p>
                        </div>
                    </div>
                    <div className=' flex gap-2 text-lg'>
                        <FaMailBulk size={30} className=' text-blue-500' />
                        <div>
                            <h1 className=' text-xl font-medium'>Email</h1>
                            <p>info@alincoaccountants.org</p>
                        </div>
                    </div>
                    <div className=' flex gap-2 text-lg'>
                        <FaMobileAlt size={30} className=' text-blue-500' />
                        <div>
                            <h1 className=' text-xl font-medium'>Tel</h1>
                            <p>01582 249455</p>
                        </div>
                    </div>
                    <div className=' flex gap-2'>
                        <a><FaFacebookMessenger size={30} className=' text-blue-700 cursor-pointer' /></a>
                        <a><FaInstagram size={30} className=' text-black dark:text-white cursor-pointer' /></a>
                        <a><AiFillLinkedin size={30} className=' text-blue-500 cursor-pointer' /></a>
                        <a><AiFillTwitterCircle size={30} className=' text-blue-400 cursor-pointer' /></a>
                    </div>
                </div>
                <h1 className=' text-xl items-center justify-center'>OR,</h1>
                <div className=' md:w-[55%]'>
                    <form method="POST" className='  py-5 md:py-12' id='form'>
                        <input 
                            type='text'
                            id='name'
                            placeholder='Your Name ...'
                            name='name'
                            className=' mb-2 w-full rounded border border-gray-400 py-2 pl-2 pr-4 text-black'
                        />
                        <input
                            required={true}
                            type='email'
                            id='email'
                            placeholder='Your Email ...'
                            name='email'
                            className=' mb-2 w-full rounded border border-gray-400 py-2 pl-2 pr-4 text-black'
                        />
                        <textarea
                            required={true}
                            name='textarea'
                            id='textarea'
                            cols="30"
                            rows="4"
                            placeholder='Your Message ...'
                            className=' mb-2 w-full rounded border border-gray-400 py-2 pl-2 pr-4 text-black' 
                        />
                        <button type='submit' className=' w-full py-3 rounded text-gray-200 transition-all duration-300 hover:scale-105
                        font-semibold text-xl bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
