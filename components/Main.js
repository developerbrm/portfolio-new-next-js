import Image from "next/image";
import React from "react";
import Contact from "./common/Contact";

const Main = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section id="hero" className="grid h-screen content-center gap-4 px-5">
        <div className="avatar-container relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={`https://loremflickr.com/100/100/`}
            alt="profile picture"
            layout="fill"
          />
        </div>

        <h2 className="text-3xl font-light text-custom-white-light">
          <span className="block">Hi, I am</span>
          <span className="block font-medium">Braham Prakash</span>
          <span className="block">I am a Web Developer</span>
        </h2>

        <a className="btn" href="#works">
          My Works
        </a>
      </section>

      <Contact />
    </main>
  );
};

export default Main;
