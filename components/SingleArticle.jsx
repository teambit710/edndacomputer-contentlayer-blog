import Image from "next/image";
import image from "../public/images/avatar.jpg";
import Link from "next/link";
import {
  TwitterLogo,
  LinkedinLogo,
  EnvelopeSimpleOpen,
  DiscordLogo,
} from "@phosphor-icons/react";

export const SingleArticle = ({ author, image, category, title, children }) => {
  return (
    <article className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full mx-auto mb-10 text-left w-4/5">
        <div className="pb-6 mb-6 border-b border-gray-200">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"s>
            {title}
          </h1>
          <p className="text-base text-gray-500">
            January 18, 2021 — Written by {author.name}
          </p>
        </div>
        <nav className="mt-2 flex items-center space-x-3">
          <Link
            passHref={true}
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-primary-light hover:text-primary"
          >
            <TwitterLogo size={48} color="#ff007f" weight="duotone" />
          </Link>
          <Link
            passHref={true}
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-primary-light hover:text-primary"
          >
            <LinkedinLogo size={48} color="#ff007f" weight="duotone" />
          </Link>
          <Link
            passHref={true}
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-primary-light hover:text-primary"
          >
            <EnvelopeSimpleOpen size={48} color="#ff007f" weight="duotone" />
          </Link>
          <Link
            passHref={true}
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-primary-light hover:text-primary"
          >
            <DiscordLogo size={48} color="#ff007f" weight="duotone" />
          </Link>
        </nav>
        <Image
          className=" md:h-36 w-full object-cover object-center"
          src={image}
          width={1440}
          height={800}
          alt="blog"
        />
      </div>

      <div className="w-full mx-auto prose max-w-7xl">{children}</div>
    </article>
  );
};
