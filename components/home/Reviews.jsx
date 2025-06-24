"use client";

import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import ReviewCard from "./ReviewCard";
import React from "react";
import Slider from 'react-slick';

const reviews = [
    {
        name: "RSM Khan",
        date: "2024-10-29",
        avatar: "/image/user1.jpg",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
        name: "Lamiya Aktar",
        date: "2024-10-29",
        avatar: "/image/user2.jpg",
        rating: 4.7,
        text: "Highly recommendation for Ali & Co. Special thanks to Mr Ali. He is a man down to the earth.",
    },
    {
        name: "Muhammad Butt",
        date: "2024-10-29",
        avatar: "/image/user3.jpg",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
        name: "Kamrul Hasan",
        date: "2024-10-29",
        avatar: "/image/user4.jpg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.",
    },
    {
        name: "Sajjad Kadir Sajib",
        date: "2024-10-29",
        avatar: "/image/user5.png",
        rating: 5,
        text: "Ali & Co Accountants in Luton has been an incredible asset to our business. Their team is not only skilled in accounting but also deeply understand...",
    },
    {
        name: "Emon Hasan",
        date: "2024-10-29",
        avatar: "/image/user6.jpg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    },
];

const NextArrow = (props) => (
  <div className=" hidden lg:block absolute z-10 -right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110" onClick={props.onClick}>
    <MdOutlineKeyboardArrowRight size={40} />
  </div>
);

const PrevArrow = (props) => (
  <div className=" hidden lg:block absolute z-10 -left-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110" onClick={props.onClick}>
    <MdOutlineKeyboardArrowLeft size={40} />
  </div>
);

export default function Reviews() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 500, settings: { slidesToShow: 1 } },
            { breakpoint: 640, settings: { slidesToShow: 2 } },
            { breakpoint: 930, settings: { slidesToShow: 3 } },
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
        ],
    };


    return (
        <div className="relative w-full px-4 md:px-20 py-12 overflow-hidden">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">EXCELLENT</h2>
                <div className="flex justify-center items-center gap-1 text-yellow-400 text-2xl">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                    Based on <strong>55 reviews</strong>
                </p>
                <FcGoogle className="mx-auto mt-2 text-4xl" />
            </div>
            <Slider {...settings}>
                {reviews.map((r, i) => (
                    <div key={i} className=" px-2">
                        <ReviewCard review={r} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
