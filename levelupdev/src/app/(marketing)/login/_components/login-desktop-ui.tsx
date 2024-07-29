import React from "react";
import Carousel from "./carousel";
import LoginForm from "@/app/components/LoginForm";
import Image from "next/image";
import WelcomeText from "./welcome-text";

const LoginDesktopUi = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/sample_cover.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center relative tab:hidden"
    >
      <div className="w-[70%] relative">
        <Image
          className="w-full object-cover"
          width={2681}
          height={2807.55}
          src="/images/avi-richards-Z3ownETsdNQ-unsplash-scaled.jpg"
          alt="Login Image 1"
        />
        <WelcomeText />
        <Carousel />
      </div>
      <div className="absolute flex flex-col items-center justify-between bottom-[25%] w-[25%] h-[20rem] right-[2.5%] bg-[#140E0E6B]">
        <h3 className="text-white font-normal text-[30px]">Get Started</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginDesktopUi;
