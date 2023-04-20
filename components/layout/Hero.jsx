import Button from "./Button";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto  px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Changing the game,
            <strong className="font-extrabold text-primary-dark sm:block">
              one line of code at a time.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            a digital record of the current state of computer technology and the
            internet.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button color="primary">Resume</Button>

            <Button color="secondary">Contact me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
