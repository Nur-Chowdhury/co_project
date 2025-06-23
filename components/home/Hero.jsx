"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination"; 

const slides = [
    "/image/hero3.png",
    "/image/hero1.png",
];

export default function Hero() {
    const swiperRef = useRef(null);
    const [animateText, setAnimateText] = useState(false);

    const handleSlideChange = () => {
        setAnimateText(false);
        setTimeout(() => setAnimateText(true), 400);
    }

    return (
        <motion.div 
            className="relative w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.4 }}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full h-full"
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {slides.map((src, i) => (
                    <SwiperSlide key={i} className=" w-full">
                        <div className=" flex justify-center items-center w-full h-full">
                            <img
                                src={src}
                                alt={`slide-${i}`}
                                className="w-[95%] lg:w-[98%] h-[450px] md:h-[600px] rounded-xl border-[3px] border-green-500"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className={` w-full absolute bottom-[10%] z-20 text-white flex flex-col items-center transition-all duration-700 ${
                    animateText ? " animate-slide-up" : "opacity-0"
                }`}
            >
                <h1 className="text-xl md:text-3xl font-bold mb-4 leading-tight text-center"
                    style={{
                        WebkitTextStroke: "0.5px black"
                    }}
                >
                    Grow Your Business With Confidence
                </h1>
                <button className=" w-[30%] max-w-[120px] text-base md:text-lg md:font-medium rounded-lg hover:rounded-xl border-[3px] border-blue-600 bg-blue-600
                 hover:bg-white text-white hover:text-blue-600 p-3 transition-all duration-400 hover:scale-105">
                    Contact Us
                </button>

            </div>
        </motion.div>
    )
}
