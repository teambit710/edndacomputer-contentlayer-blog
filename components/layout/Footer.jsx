import Link from "next/link";
import Image from "next/image";
import beaker from "../../public/images/beaker.png";

import {
  TwitterLogo,
  LinkedinLogo,
  EnvelopeSimpleOpen,
  DiscordLogo,
} from "@phosphor-icons/react";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto flex w-full items-center justify-between px-1 py-4">
        <Link href="/" passHref={true}>
          <div className="xpace-x-3 inline-flex items-center">
            <Image src={beaker} height={50} width={50} alt="logo" />
            <span className={`text-2xl font-extralight text-primary`}>
              edndacomputer{" "}
            </span>
          </div>
        </Link>
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
      </div>
      <div>
        <nav className="mx-auto mt-2 flex w-full flex-row items-center justify-between text-xs font-medium text-gray-500">
          <span>© 2022, edndacomputer. All Rights Reserved.</span>
          <span>
            <Link href="#" className="hover:text-primary-light">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary-light">
              Terms
            </Link>
          </span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
