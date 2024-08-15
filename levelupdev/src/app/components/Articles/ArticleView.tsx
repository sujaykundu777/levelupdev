import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface CategoryProps {
  categoryName: string;
  categorySlug: string;
}

interface PostDataProps {
  title?: string;
  slug: string;
  content: string;
  status?: string;
  description?: string;
  coverImage?: string;
  publishedAt?: string | number | Date;
  author?: {
    name?: string;
    picture?: string;
  };
}

// interface ArticleProps {
//   title: string | undefined;
//   slug: string;
//   coverImage: string;
//   publishedAt: string;
//   author: {
//     name: string;
//     picture: string;
//     title: string;
//     biography: string;
//   };
//   category?: CategoryProps[];
//   content: string;
// }

const ArticleView = ({ post }: { post: PostDataProps }) => {
  console.log("article post >>>", post);
  //   const postCategories = post.category
  //     ? post.category.map((category) => category.categoryName)
  //     : [];
  return (
    <div className="bg-[#101827] container-fluid py-10">
      {/* <Image
        src={post.coverImage ? post.coverImage : ""}
        alt="cover image"
        style={{ objectFit: "contain" }}
        fill
        className="w-full h-64 bg-cover bg-center "
      /> */}
      <div
        className="bg-cover relative bg-center h-64 w-full p-4 bg-opacity-20"
        style={{
          backgroundImage: `url(${post.coverImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
          backgroundPosition: "bottom",
        }}
      >
        <div className="relative inset-0 opacity-100"></div>
        <div className="relative z-1">
          <Link href="/guides" className="flex flex-row  w-fit">
            <Image
              src="/images/back-btn.png"
              width={60}
              height={60}
              alt="back button"
            />
            <h1 className="text-white text-xl p-4"> Back to Dev Guides</h1>
          </Link>
          <div className="ml-20">
            <h1 className=" text-xl md:text-3xl  mb-4 md:w-[70%]">
              {post.title}
            </h1>
            <div className="flex gap-x-10 gap-y-4 flex-wrap">
              <div className="flex align-middle gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="#F0F2F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5.33788 18.3206C5.99897 15.5269 8.77173 14 11.6426 14H12.3574C15.2283 14 18.001 15.5269 18.6621 18.3206C18.79 18.8611 18.8917 19.4268 18.9489 20.0016C19.0036 20.5512 18.5523 21 18 21H6C5.44772 21 4.99642 20.5512 5.0511 20.0016C5.1083 19.4268 5.20997 18.8611 5.33788 18.3206Z"
                    stroke="#F0F2F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p>{post.author ? post.author.name : "John Doe"}</p>
              </div>
              <div className="flex align-middle gap-2">
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
                <p>
                  {new Date(
                    post.publishedAt ? post.publishedAt : ""
                  ).toDateString()}
                </p>
              </div>
              {/* <div className="flex align-middle gap-2">
                <svg
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.25439 8C3.25439 7.05719 3.25439 6.58579 3.54729 6.29289C3.84018 6 4.31159 6 5.25439 6H17.4203C17.9213 6 18.1718 6 18.3861 6.10949C18.6004 6.21898 18.7472 6.42197 19.0408 6.82795L21.9337 10.828C22.3428 11.3935 22.5473 11.6763 22.5473 12C22.5473 12.3237 22.3428 12.6065 21.9337 13.172L19.0408 17.172C18.7472 17.578 18.6004 17.781 18.3861 17.8905C18.1718 18 17.9213 18 17.4203 18H5.2544C4.31159 18 3.84018 18 3.54729 17.7071C3.25439 17.4142 3.25439 16.9428 3.25439 16V8Z"
                    stroke="#ECF0FA"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="16.2726"
                    cy="12"
                    rx="1.08483"
                    ry="1"
                    fill="#33363F"
                    stroke="#E8E8E8"
                    strokeWidth="2"
                  />
                </svg>
                <p>{postCategories.join(", ")} </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-col">
        <div className="md:bg-[#141212] lg:z-10 p-8 md:w-72 flex flex-col items-center self-center lg:self-end lg:-mt-36 lg:mr-4">
          <Image
            className="rounded-full h-20 w-20 object-cover"
            src={
              post.author?.picture
                ? post.author.picture
                : "/images/placeholder.jpg"
            }
            width={100}
            height={100}
            alt={post.author?.name ? post.author.name : "John Doe"}
          />
          <p className="text-xl">
            {post.author ? post.author.name : "John Doe"}
          </p>
          {/* <p className="text-gray-500">{post.author.title}</p>
          <p className="text-sm text-center">{post.author.biography}</p> */}
        </div>
      </div>
      <div className="justify-center mx-auto w-[80%] p-8">
        <Markdown>{post.content}</Markdown>
      </div>
      {/* <div
        className="justify-center mx-auto w-[80%] p-8"
        dangerouslySetInnerHTML={{ __html: postRendered.renderedhtml }}
      ></div> */}
    </div>
  );
};

export default ArticleView;
