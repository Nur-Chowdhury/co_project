"use client";

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoSend } from 'react-icons/io5';
import { FaChevronDown } from "react-icons/fa";


export default function WhatsappWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');

    const toggleChat = () => {
        if (isOpen) {
            setIsVisible(false); 
            setTimeout(() => setIsOpen(false), 1200);
        } else {
            setIsOpen(true);
            setIsVisible(true);
        }
    };

    
    const handleSend = () => {
        if (!message.trim()) return;
        const phone = process.env.WHATSAPP_NUMBER;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
        setMessage('');
    };


    return (
        <div className=" relative z-[11000]">
            {isOpen && (
                <div className={`fixed bottom-[88px] right-4 w-[90vw] max-w-sm h-[400px] rounded-xl shadow-xl overflow-hidden border border-green-100 bg-white 
                    ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`}
                >
                    <div className=' w-full h-[50px] bg-green-500 flex px-4 py-2 justify-between items-center'>
                        <div className=' flex gap-1 items-center'>
                            <FaWhatsapp size={22} />
                            <span className='font-medium'>Let's chat on WhatsApp</span>
                        </div>
                        <FaChevronDown size={22} className=' cursor-pointer' onClick={toggleChat}/>
                    </div>
                    <div
                        style={{
                        backgroundImage: "url('/image/whatsappbg.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                        className="flex flex-col h-[calc(100%-50px)] justify-between p-3"
                    >
                        <div className="bg-white rounded-lg px-3 py-2 shadow text-sm text-gray-900 max-w-[165px]">
                            How can I help you? :)
                        </div>

                        <form onSubmit={handleSend} className="flex gap-1 items-center mt-3">
                            <input
                                type="text"
                                placeholder="Write your message..."
                                value={message}
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-grow p-2 text-sm focus:outline-none text-black rounded-lg"
                            />
                            <button
                                type='submit'
                                className="p-2  text-blue-500 cursor-pointer"
                            >
                                <IoSend size={22} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <button
                onClick={toggleChat}
                className={`fixed bottom-6 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg transition-transform duration-300 ${
                    isOpen ? 'rotate-90' : ''
                }`}
                aria-label="Toggle WhatsApp Chat"
            >
                {isOpen ? <RxCross2 size={24} className=' font-bold' /> : <FaWhatsapp size={22} />}
            </button>

            
        </div>
    )
}
