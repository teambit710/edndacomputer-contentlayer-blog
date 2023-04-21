import React from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "../public/images/avatar.jpg";

import { ArrowRight, Timer, Calendar } from "@phosphor-icons/react";

export default function ArticleCard({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
}) {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-lg shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-gray-100">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img src={image} alt="tailwindlogo" className="rounded-xl" />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">
              {readingTime}
            </p>
            <div className="flex items-center">
              <Timer size={12} color="#ff66b3" weight="duotone" />
              <p className="text-gray-600 font-bold text-sm ml-1">
                <span className="text-gray-500 font-normal">{dateTime}</span>
              </p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <span class="bg-primary-light text-gray-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-primary-dark outline-2">
              {category}
            </span>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {title}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">{description}</p>
          <p className="text-lg font-black text-gray-800">
            <a
              href={`/article/${slug}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read More
              <ArrowRight
                size={48}
                color="#ff66b3"
                weight="duotone"
                className="h-6 w-6"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
