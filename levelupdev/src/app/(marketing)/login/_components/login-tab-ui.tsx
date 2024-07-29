import React from "react";
import WelcomeText from "./welcome-text";
import LoginForm from "@/app/components/LoginForm";
import Carousel from "./carousel";

const LoginTabUi = () => {
  return (
    <div className="hidden tab:block">
      <div
        className="w-screen h-[60vh] bg-red-600 relative"
        style={{
          backgroundImage:
            "url('/images/avi-richards-Z3ownETsdNQ-unsplash-scaled.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <WelcomeText />
        <div className="absolute bottom-10 left-1/2 -translate-x-[50%]">
          <LoginForm />
        </div>
      </div>
      <div
        className="w-screen h-[50vh] bg-red-600 relative"
        style={{
          backgroundImage: "url('/images/sample_cover.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Carousel />
      </div>
    </div>
  );
};

export default LoginTabUi;
