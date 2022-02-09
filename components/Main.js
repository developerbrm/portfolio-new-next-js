import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <main className="bg-slate-900 min-h-screen text-white">
      <section id="hero" className="h-screen grid content-center px-5 gap-4">
        <div className="avatar-container w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src={`https://loremflickr.com/100/100/`}
            alt="profile picture"
            layout="fill"
          />
        </div>

        <h2 className="text-3xl text-custom-white-light font-light">
          <span className="block">Hi, I am</span>
          <span className="block font-medium">Braham Prakash</span>
          <span className="block">I am a Web Developer</span>
        </h2>

        <a className="btn" href="#works">
          My Works
        </a>
      </section>
    </main>
  );
};

export default Main;
