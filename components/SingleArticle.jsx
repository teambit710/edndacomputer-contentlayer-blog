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
    <article
      class="px-4 py-24 mx-auto max-w-7xl"
      itemid="#"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <div class="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
        <div class="pb-6 mb-6 border-b border-gray-200">
          <h1
            class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
            itemprop="headline"
          >
            {title}
          </h1>
          <p class="text-base text-gray-500">
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
          className="lg:h-64 md:h-36 w-full object-cover object-center"
          src={image}
          width={720}
          height={400}
          alt="blog"
        />
      </div>

      <div class="w-full mx-auto prose max-w-7xl">{children}</div>
    </article>
  );
};
