import Link from "next/link";
import Image from "next/image";
import beaker from "../../public/images/beaker.png";

import {
  TwitterLogo,
  LinkedinLogo,
  EnvelopeSimpleOpen,
  DiscordLogo,
  DotOutline,
} from "@phosphor-icons/react";

import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <Link href="/" passHref={true}>
          <div className="xpace-x-3 inline-flex items-center">
            <Image
              src={beaker}
              height={50}
              width={50}
              alt="edndacomputer logo"
            />
            <span className={`text-2xl font-extralight text-primary`}>
              edndacomputer
            </span>
          </div>
        </Link>

        <nav className="mt-2 flex items-center justify-between md:space-x-4">
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
      </div>
      <div className="flex justify-between space-y-8">
        <nav className="text-xs text-gray-500 flex flex-col justify-between sm:flex-row mx-auto items-center">
          <span>© 2023 edndacomputer</span>
          <DotOutline
            size={48}
            color="#ff66b3"
            weight="duotone"
            className="hidden md:block"
          />
          <span>All Rights Reserved</span>
          <DotOutline
            size={48}
            color="#ff66b3"
            weight="duotone"
            className="hidden md:block"
          />
          <span>Terms + Conditions</span>
          <DotOutline
            size={48}
            color="#ff66b3"
            weight="duotone"
            className="hidden md:block"
          />
          <span>Privacy</span>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
