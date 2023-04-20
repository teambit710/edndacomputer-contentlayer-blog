import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className={`mx-auto my-1 flex w-full flex-col md:flex-col items-center justify-between px-3`}
    >
      <div>
        <div className={`flex flex-col items-center`}>
          <Image
            src="/images/beaker.png"
            alt="beaker"
            width={80}
            height={80}
            objectFit={`cover`}
          />
        </div>
        <span className={`mx-2 text-xl md:text-4xl font-thin text-primary`}>
          edndacomputer{" "}
        </span>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
