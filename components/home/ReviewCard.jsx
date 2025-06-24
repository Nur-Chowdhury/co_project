"use client"

import { FaStar, FaCheckCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react'

export default function ReviewCard({ review }) {
    const [showFull, setShowFull] = useState(false);

    const isLong = review.text.length > 100;
    const previewText = review.text.slice(0, 100);
    return (
        <div className="my-[10px] bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 p-4 h-[250px] flex flex-col justify-between min-h-[200px]
            z-[10000] transition-all duration-300 transform hover:-translate-y-2">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    {typeof review.avatar === "string" && review.avatar.startsWith("/") ? (
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                            {review.avatar}
                        </div>
                    )}
                    <div>
                        <h4 className="font-semibold text-sm">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                </div>
                <FcGoogle className="text-xl" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
                <FaCheckCircle className="text-blue-500 ml-1" />
            </div>

            {/* Text */}
            <p className="text-sm mt-3 text-gray-800 dark:text-gray-200">
                {showFull || !isLong ? review.text : `${previewText}...`}
            </p>

            {/* Toggle Button */}
            {isLong && (
                <div
                    className="text-sm mt-2 text-gray-700 dark:text-gray-300  hover:underline focus:outline-none"
                    onClick={() => setShowFull(!showFull)}
                >
                    {showFull ? "Hide" : "Read more"}
                </div>
            )}
        </div>
    )
}
