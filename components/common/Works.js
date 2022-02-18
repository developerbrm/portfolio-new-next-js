import React from "react";
import Image from "next/image";

const Works = () => {
  const projectsData = [
    {
      img: "https://loremflickr.com/400/400/abstract",
      alt: "camera in the desert",
      title: "Project 1",
      des: "Lorem ipsum dolor, sit amet cot amd aliquid corrupti enim fugiat.rem ipsum dolor, sit amet consectetur adipisicing elit. Optio, porro. Suscipit nostrum quos reiciendis atque repudiandae esse sunt eum architecto, minima iste voluptas sit consectetur est possimus doloremque facere dolore nemo necessitatibus quisquam quia nihil officiis eaque! Exercitationem tenetur illum, alias cum aliquam dolorem beatae, libero nostrum placeat et eius id aliquid corrupti enim fugiat.",
      bgDark: true,
    },
    {
      img: "https://loremflickr.com/500/500/abstract",
      alt: "camera in the desert",
      title: "Project 1",
      des: "Lorem ipsum dolor, sit amet cot amd aliquid corrupti enim fugiat.rem ipsum dolor, sit amet consectetur adipisicing elit. Optio, porro. Suscipit nostrum quos reiciendis atque repudiandae esse sunt eum architecto, minima iste voluptas sit consectetur est possimus doloremque facere dolore nemo necessitatibus quisquam quia nihil officiis eaque! Exercitationem tenetur illum, alias cum aliquam dolorem beatae, libero nostrum placeat et eius id aliquid corrupti enim fugiat.",
      bgDark: false,
    },
    {
      img: "https://loremflickr.com/501/501/abstract",
      alt: "camera in the desert",
      title: "Project 1",
      des: "Lorem ipsum dolor, sit amet cot amd aliquid corrupti enim fugiat.rem ipsum dolor, sit amet consectetur adipisicing elit. Optio, porro. Suscipit nostrum quos reiciendis atque repudiandae esse sunt eum architecto, minima iste voluptas sit consectetur est possimus doloremque facere dolore nemo necessitatibus quisquam quia nihil officiis eaque! Exercitationem tenetur illum, alias cum aliquam dolorem beatae, libero nostrum placeat et eius id aliquid corrupti enim fugiat.",
      bgDark: true,
    },
    {
      img: "https://loremflickr.com/502/502/abstract",
      alt: "camera in the desert",
      title: "Project 1",
      des: "Lorem ipsum dolor, sit amet cot amd aliquid corrupti enim fugiat.rem ipsum dolor, sit amet consectetur adipisicing elit. Optio, porro. Suscipit nostrum quos reiciendis atque repudiandae esse sunt eum architecto, minima iste voluptas sit consectetur est possimus doloremque facere dolore nemo necessitatibus quisquam quia nihil officiis eaque! Exercitationem tenetur illum, alias cum aliquam dolorem beatae, libero nostrum placeat et eius id aliquid corrupti enim fugiat.",
      bgDark: false,
    },
  ];

  const darkBgClasses = "text-custom-white-light";
  const lightBgClasses = "bg-white bg-opacity-0 p-4 text-custom-dark-blue";

  return (
    <section
      id="works"
      title="Works"
      className="bg-custom-white-light text-center"
    >
      {/* //   <h2 className="py-8 text-center font-laila text-4xl font-bold text-custom-dark-blue">
    //     My Works
    //   </h2> */}

      {projectsData.map((projectItem, index) => {
        const { img, title, des, alt, bgDark } = projectItem;

        return (
          <div key={index} title={title} className="relative h-screen w-screen ">
            <div className="relative z-[1] grid h-full w-full grid-rows-[1fr_2fr] pt-10">
              <div className="img-container relative h-full w-11/12 justify-self-center overflow-hidden rounded-xl shadow-lg">
                <Image
                  className=""
                  src={img}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={img}
                />
              </div>
              <div
                className={`max-h-full self-stretch overflow-auto font-semibold mt-10 ${
                  bgDark ? darkBgClasses : lightBgClasses
                } `}
              >
                <h3 className="my-2 font-laila text-3xl font-bold ">{title}</h3>
                <p className="my-2">{des}</p>
              </div>
            </div>

            <Image
              className="pointer-events-none absolute scale-[3] blur-md mix-blend-multiply"
              src={img}
              alt={""}
              layout="fill"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Works;
