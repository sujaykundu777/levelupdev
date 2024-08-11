import Image from "next/image";
import React from "react";

const ContributePage = () => {
  console.log("Contributors page");
  return (
    <div
      style={{
        backgroundImage: "url('/images/contribute-bg.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[140vh] flex items-center relative tab:hidden"
    >
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col gap-y-4 text-center">
        <h2 className="text-[35px] tab:text-[28px] mobile:text-[20px] font-normal text-white">
          Contributors
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
        <div className="w-[110%] mx-auto grid grid-cols-4 grid-rows-2 gap-10 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Image
              key={item}
              alt="Contributor"
              src="/images/contributor.jpg"
              width={1000}
              height={1000}
              className="rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributePage;
