import React from "react";
import Image from "next/image";
import TopNav from "./components/topNav";
import JoinCommunityWidget from "./components/communityWidget";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="h-full scroll-smooth focus:scroll-auto">
      <TopNav user={session?.user} />

      <div className="pt-2">
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply h-screen">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              👩‍💻 Code, Learn, Grow 🚀
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              A community of web developers and enthusiasts, who are passionate
              about learning and growing together.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#learning-path"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 mx-4 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Start learning
              </a>
              <a
                href="#community"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Join the community
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section
          id="learning-path"
          className="mx-auto max-w-screen-xl py-24 lg:py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Learn Web Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Frontend Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Frontend development involves creating the user interface and
                interactions of a website or web application. It focuses on
                using technologies like React to build responsive and
                interactive user interfaces.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-black">
                Skills you will learn:
              </h4>
              <ul className="list-disc list-inside text-black">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next JS</li>
                <li>Git</li>
              </ul>
              <div className="mt-4">
                <a
                  href="#explore"
                  className="inline-flex justify-center  hover:text-gray-900 items-center py-3 px-5 mx-4 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 bg-black focus:ring-4 focus:ring-gray-400"
                >
                  Explore this path
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Backend Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Backend web development involves building the server-side logic
                and database management of a website or web application. It
                focuses on technologies like Node.js and databases like MongoDB.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-black">
                {" "}
                Skills you will learn:
              </h4>
              <ul className="list-disc list-inside text-black">
                <li>Node</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Nest JS</li>
                <li>RESTful APIs</li>
                <li>Graphql</li>
                <li>Git</li>
              </ul>
              <div className="mt-4">
                <a
                  href="#explore"
                  className="inline-flex justify-center  hover:text-gray-900 items-center py-3 px-5 mx-4 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 bg-black focus:ring-4 focus:ring-gray-400"
                >
                  Explore this path
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">
                MERN Stack Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                MERN stack is a popular technology stack for building full stack
                web applications. It includes MongoDB, Express.js, React, and
                Node.js.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-black">
                Skills you will learn:
              </h4>
              <ul className="list-disc list-inside text-black">
                <li>HTML, CSS, JS</li>
                <li>React</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>RESTful APIs</li>
                <li>Graphql</li>
                <li>Git</li>
              </ul>
              <div className="mt-4">
                <a
                  href="#explore"
                  className="inline-flex justify-center  hover:text-gray-900 items-center py-3 px-5 mx-4 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 bg-black focus:ring-4 focus:ring-gray-400"
                >
                  Explore this path
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="community"
          className="mx-auto max-w-screen-xl py-4 lg:py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Join the Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <JoinCommunityWidget src="https://nas.io/checkout-widget?communityCode=LEVEL_UP_6&communitySlug=%2Flevel-up-dev&buttonText=Join%20as%20member&buttonTextColorHex=%23000&buttonBgColorHex=%23fccb1d&widgetTheme=light&backgroundColorHex=%23fff" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 justify-center text-center">
              <Image
                alt="Level Up Dev Community"
                src="/cto-1.png"
                width={300}
                height={300}
                className="mx-auto rounded-md"
              />
              <h3 className="text-xl font-semibold mb-4">Level Up Dev</h3>
              <p className="text-gray-600 mb-4">
                Level Up Dev is a community of web developers and enthusiasts,
                who are passionate about learning and growing together. Join us
                to connect with like-minded individuals, share knowledge, and
                collaborate on projects.
              </p>
            </div>
          </div>
        </section>
        <footer className="bg-black py-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <svg
                className="w-6 h-6 text-white dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg
                className="w-6 h-6 text-white dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg
                className="w-6 h-6 text-white dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
