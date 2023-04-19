import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className={`mx-auto my-1 flex w-full flex-row items-center justify-between px-3`}
    >
      <div className={`flex flex-row items-center`}>
        <Image
          src="/images/beaker.png"
          alt="beaker"
          width={80}
          height={80}
          objectFit={`cover`}
        />
      </div>
      <span className={`mx-2 text-4xl font-thin text-primary`}>
        edndacomputer{" "}
      </span>
      <Nav />
    </header>
  );
};

export default Header;
