import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Books } from "@phosphor-icons/react";

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
    <section className="py-6">
      <div className="dark:bg-gray-100 dark:text-gray-900 flex flex-row rounded-lg overflow-hidden shadow-lg">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center hidden md:block"
          src={image}
          width={720}
          height={400}
          alt="blog"
        />
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-4">
          <div className="flex justify-start">
            <span className="bg-blue-100 text-primary-dark text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-primary dark:text-gray-50">
              {category}
            </span>
          </div>
          <h1 className="md:text-3xl text-xl font-semibold"> {title}</h1>
          <p className="flex-1 pt-2">{description}</p>
          <Link rel="noopener noreferrer" href={`/article/${slug}`}>
            <div className="inline-flex items-center space-x-1">
              <span className="text-xl text-primary-light">Read more</span>
              <ArrowRight size={48} color="#ff66b3" weight="duotone" />
            </div>
          </Link>
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <div className="relative flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-full bg-transparent text-sm font-bold uppercase text-gray-800">
                <img
                  className="h-full w-full rounded-full object-cover object-center ring-2 ring-transparent dark:ring-primary-light p-0.5"
                  src={"/images/avatar.jpg"}
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col pl-2">
                <span className="self-center text-sm">by edndacomputer</span>
                <span className="self-center text-sm inline-flex space-x-2">
                  <Calendar size={32} color="#ff66b3" weight="duotone" />
                  <div>{dateTime}</div>
                </span>
              </div>
            </div>
            <span className="text-xs">
              <Books
                size={48}
                color="#ff66b3"
                weight="duotone"
                className="hidden md:block"
              />
              <span className="text-xs">{readingTime}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
