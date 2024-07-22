import React from "react";
import LoginForm from "../../components/LoginForm";
import Image from "next/image";
import Carousel from "./_components/carousel";

const LoginPage: React.FC = () => {
  return (
    <div className="pt-2">
      <div
        style={{
          backgroundImage: "url('/images/sample_cover.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center relative"
      >
        <div className="w-[70%] relative">
          <Image
            className="w-full object-cover"
            width={2681}
            height={2807.55}
            src="/images/avi-richards-Z3ownETsdNQ-unsplash-scaled.jpg"
            alt="Login Image 1"
          />
          <div className="absolute top-20 left-16">
            <h2 className="text-[35px] font-semibold text-white">
              Welcome to levelupdev
            </h2>
            <h3 className="text-[50px] font-bold text-white">
              Start your Journey now{" "}
            </h3>
          </div>
          <Carousel />
        </div>
        <div className="absolute flex flex-col items-center justify-between bottom-[25%] w-[25%] h-[20rem] right-[2.5%] bg-[#140E0E6B]">
          <h3 className="text-white font-normal text-[30px]">Get Started</h3>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
