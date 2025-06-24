"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";


const slides = [
    "/image/hero3.png",
    "/image/hero1.png",
];

export default function Hero() {
    const [animateText, setAnimateText] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        beforeChange: () => {
            setAnimateText(false); 
        },
         afterChange: () => {
            setAnimateText(true);
        },
    };


    return (
        <motion.div 
            className="relative w-full min-h-[450px] md:min-h-[600px] overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <Slider {...settings}>
                {slides.map((src, i) => (
                    <div key={i} className=" w-full">
                        <div className=" flex justify-center items-center">
                            <img
                                src={src}
                                alt={`slide-${i}`}
                                className="w-[95%] lg:w-[98%] h-[450px] md:h-[600px] rounded-xl border-[3px] border-green-500"
                            />
                        </div>
                    </div>
                ))}
            </Slider>

            {animateText && (
                <div
                    className=" w-full absolute bottom-[10%] z-20 text-white text-center animate-fadeIn"
                >
                    <h1
                        className="text-xl md:text-3xl font-bold mb-4"
                        style={{ WebkitTextStroke: '0.5px black' }}
                    >
                        Grow Your Business With Confidence
                    </h1>
                    <button className="w-[30%] max-w-[120px] text-base md:text-lg font-medium rounded-lg hover:rounded-xl border-[3px] border-blue-600 bg-blue-600 hover:bg-white text-white hover:text-blue-600 p-3 transition-all duration-400 hover:scale-105">
                        Contact Us
                    </button>
                </div>
            )}
        </motion.div>
    )
}
