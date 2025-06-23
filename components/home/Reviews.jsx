"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ReviewCard from "./ReviewCard";
import { useRef } from "react";

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

export default function Reviews() {

    const swiperRef = useRef(null);

    return (
        <div className="relative w-full px-4 md:px-20 py-12">
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
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 5000 }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                navigation
            >
                {reviews.map((r, i) => (
                    <SwiperSlide key={i}>
                        <div
                            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                        >
                            <ReviewCard review={r} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
