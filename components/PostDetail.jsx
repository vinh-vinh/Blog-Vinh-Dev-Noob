import React from "react";

import moment from "moment";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
const PostDetail = ({ post }) => {
  return (
    <>
      <div className="bg-white dark:bg-[#1C1E21] dark:text-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0 leading-8">
          <div className="flex items-center mb-8 w-full ">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
              <img
                alt={post.author?.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author?.photo.url}
              />
              <p className="inline align-middle bg-white dark:bg-[#1C1E21] dark:text-white text-gray-700 ml-2 font-medium text-lg">
                {post.author?.name}
              </p>
            </div>
            <div className="font-medium text-gray-700 bg-white dark:bg-[#1C1E21] dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          <RichText
            content={post.content.raw.children}
            renderers={{
              h4: ({ children }) => (
                <h1 className="text-black dark:text-white text-start text-4xl font-bold">
                  {children}
                </h1>
              ),
              p: ({ children }) => (
                <p className="text-lg leading-8 font-sans mt-5 text-black dark:text-white ">{children}</p>
              ),
              bold: ({ children }) => (
                <strong className="text-red-500">{children}</strong>
              ),
              link: ({ children, openInNewTab, href, rel, ...rest }) => {
                if (href.match(/^https?:\/\/|^\/\//i)) {
                  return (
                    <Link className="text-red-500">
                      <a
                        className="bg-orange-600 text-red-500 my-5 text-[25px] hover:bg-sky-700 "
                        href={href}
                        target={openInNewTab ? "_blank" : "_self"}
                        rel={rel || "noopener noreferrer"}
                        {...rest}
                      >
                        {children}
                      </a>
                    </Link>
                  );
                }
                return (
                  <Link href={href} className="text-red-500">
                    <a {...rest} className="text-red-500">
                      {children}
                    </a>
                  </Link>
                );
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
