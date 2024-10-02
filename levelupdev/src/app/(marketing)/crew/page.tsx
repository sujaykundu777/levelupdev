// import Image from "next/image";
import React from "react";
import ProfileCard from "@/app/components/common/ProfileCard";

const ContributePage = () => {
  const contributors = [
    {
      id: 1,
      name: "Sujay Kundu",
      avatar: "/images/contributors/sujay.jpg",
      title: "Full Stack Developer",
      bio: "Senior Experience Engineer at Publicis Sapient",
      socials: {
        github: "https://github.com/sujaykundu777",
        twitter: "https://github.com/xplor4r",
        linkedin: "https://linkedin.com/in/sujay-kundu",
        website: "https://sujaykundu.com",
        email: "sujaykundu777@gmail.com",
      },
    },
    {
      id: 2,
      name: "Vivek",
      avatar: "/images/contributor.jpg",
      title: "Software Engineer",
      bio: "I am a software engineer with 10 years of experience in building web applications.",
      socials: {
        github: "",
        twitter: "",
        linkedin: "",
        website: "",
        email: "",
      },
    },
    {
      id: 3,
      name: "Vinayak",
      avatar: "/images/contributor.jpg",
      title: "Software Engineer",
      bio: "I am a software engineer with 10 years of experience in building web applications.",
      socials: {
        github: "",
        twitter: "",
        linkedin: "",
        website: "",
        email: "",
      },
    },
  ];

  const dummyUser = {
    name: "John Doe",
    avatar: "/images/contributor.jpg",
    title: "Software Engineer",
    bio: "I am a software engineer with 10 years of experience in building web applications.",
    socials: {
      github: "",
      twitter: "",
      linkedin: "",
      website: "",
      email: "",
    },
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/contribute-bg.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "200vh",
      }}
      className="flex items-center relative tab:hidden"
    >
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col gap-y-4 text-center">
        <h2 className="text-[35px] tab:text-[28px] mobile:text-[20px] font-normal text-white">
          Contibutors
        </h2>
        <div>
          <p className="text-center mx-auto text-[25px] w-[80%] tab:text-[18px] mobile:text-[15px] font-normal text-white">
            This is project is maintained by this amazing folks.
          </p>
          <p className="text-center mx-auto text-[25px] w-[110%] tab:text-[18px] mobile:text-[15px] font-normal text-white">
            {" "}
            You can be a part of this too. We support open source, and encourage
            all types of contributions. Also we have a earn to contribute
            program
          </p>
        </div>
        <div className="w-[110%] mx-auto grid grid-cols-3 grid-rows-2 gap-10 mt-4">
          {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <ProfileCard key={item} user={dummyUser} />
          ))} */}
          {contributors.map((contributor) => (
            <ProfileCard key={contributor.id} user={contributor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributePage;
