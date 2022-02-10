import Image from "next/image";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="w-full p-4 grid place-content-center grid-flow-col gap-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.freecodecamp.org/braham_prakash"
        title="FreeCodeCamp Profile"
        className="social-icons relative w-11 h-11"
      >
        <Image
          src="/icon-social-fcc.svg"
          alt="FreeCodeCamp Icon"
          layout="fill"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/developerbrm"
        title="LinkedIn Profile"
        className="social-icons relative w-11 h-11"
      >
        <Image
          src="/icon-social-linkedIn.svg"
          alt="LinkedIn Icon"
          layout="fill"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/developerbrm"
        title="Github Profile"
        className="social-icons relative w-11 h-11"
      >
        <Image src="/icon-social-github.svg" alt="Github Icon" layout="fill" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:developerbrm@gmail.com"
        title="Email Message"
        className="social-icons relative w-11 h-11"
      >
        <Image src="/icon-social-mail.svg" alt="Mail Icon" layout="fill" />
      </a>
    </div>
  );
};

export default SocialIcons;
