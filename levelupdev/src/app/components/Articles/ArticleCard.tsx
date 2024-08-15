"use client";
import React from "react";
import truncateText from "../../utils/truncateText";
import Link from "next/link";
import Image from "next/image";
import { ArticleCardProps } from "@/types/article";
// import { PostType } from "@/types/blog";
import dayjs from "dayjs";

const ArticleCard = ({ cardData, navPath, articlesView }: ArticleCardProps) => {
  console.log("cardData", cardData);
  console.log("navPath", navPath);
  console.log("articlesView", articlesView);
  return (
    <div
      className={`${
        articlesView === "list" ? "flex gap-6" : null
      }   p-4 w-[100%] bg-[#1F2937] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <Link href={`${navPath}/${cardData.slug}`}>
        <Image
          className={`${
            articlesView === "list" ? "h-32 w-64" : null
          } rounded-t-lg object-cover`}
          src={cardData?.coverImage || "/images/placeholder.jpg"}
          width={300}
          height={300}
          alt="blog"
        />
        {/* <img
          className={`${
            articlesView === "list" ? "h-32 w-64" : null
          } rounded-t-lg object-cover`}
          src={cardData?.img}
          alt="blog"
        /> */}
      </Link>
      <div className="w-full">
        <Link href={`articles/${cardData.slug}`}>
          <h5 className="my-2 text-l">{truncateText(cardData.title, 70)}</h5>
        </Link>
        <p className="mb-3 text-xs">
          {truncateText(cardData?.description || "", 100)}
        </p>
        <div className="flex align-middle justify-between">
          <div className="flex align-middle gap-2 self-center">
            <svg
              className="self-center"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_212_177)">
                <path
                  d="M8 0.677307C6.41775 0.677307 4.87104 1.14605 3.55544 2.02425C2.23985 2.90245 1.21447 4.15067 0.608967 5.61107C0.00346629 7.07147 -0.15496 8.67844 0.153721 10.2288C0.462403 11.7791 1.22433 13.2032 2.34315 14.321C3.46197 15.4387 4.88743 16.1999 6.43928 16.5083C7.99113 16.8167 9.59966 16.6584 11.0615 16.0535C12.5233 15.4486 13.7727 14.4242 14.6518 13.1098C15.5308 11.7955 16 10.2503 16 8.66958C15.9977 6.5506 15.1541 4.51907 13.6543 3.02072C12.1545 1.52238 10.121 0.679599 8 0.677307V0.677307ZM8 15.3298C6.68146 15.3298 5.39253 14.9392 4.2962 14.2074C3.19987 13.4755 2.34539 12.4353 1.84081 11.2183C1.33622 10.0013 1.2042 8.66219 1.46144 7.37023C1.71867 6.07828 2.35361 4.89154 3.28596 3.96009C4.21831 3.02864 5.4062 2.39431 6.6994 2.13733C7.99261 1.88034 9.33305 2.01224 10.5512 2.51633C11.7694 3.02043 12.8106 3.87409 13.5431 4.96936C14.2757 6.06462 14.6667 7.35231 14.6667 8.66958C14.6647 10.4354 13.9617 12.1283 12.7119 13.3769C11.4621 14.6255 9.76752 15.3279 8 15.3298Z"
                  fill="white"
                />
                <path
                  d="M7.99988 4.67343C7.82307 4.67343 7.6535 4.7436 7.52848 4.8685C7.40345 4.99341 7.33322 5.16281 7.33322 5.33945V8.22L5.08588 9.62663C4.93559 9.72043 4.82876 9.87003 4.78887 10.0425C4.74899 10.215 4.77933 10.3963 4.87322 10.5464C4.9671 10.6966 5.11685 10.8033 5.2895 10.8431C5.46216 10.883 5.64359 10.8527 5.79388 10.7589L8.35388 9.16042C8.45061 9.09987 8.53015 9.01554 8.5849 8.91548C8.63964 8.81542 8.66776 8.703 8.66655 8.58897V5.33945C8.66655 5.16281 8.59631 4.99341 8.47129 4.8685C8.34626 4.7436 8.17669 4.67343 7.99988 4.67343Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_212_177">
                  <rect
                    width="16"
                    height="15.9845"
                    fill="white"
                    transform="translate(0 0.677307)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-xs">
              {dayjs(cardData?.publishedAt).format("DD/MM/YYYY")}
            </p>
          </div>
          <Image
            className="rounded-full h-10 w-10 object-cover"
            src={cardData?.author?.picture || "/images/placeholder.jpg"}
            width={100}
            height={100}
            alt={"author"}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
