import React from "react";
import Link from "next/link";
import moment from "moment";
const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-[#1C1E21] dark:text-white dark:shadow-orange-100 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="flex items-center w-full mb-4">
        {/* Image */}
        <div className="w-16 flex-none md:ml-2  ">
          <img
            alt={post.author?.name}
            height="50px"
            width="50px"
            className="align-middle rounded-full"
            src={post.author?.photo.url}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between mt-5 ">
          {/* Name */}
          <div className="flex flex-row flex-wrap text-center items-center mb-4">
            <p className="inline align-middle text-gray-700 ml-2 text-lg ">
              {post.author?.name}
            </p>
            <p className="inline align-middle text-gray-700 ml-2 text-lg  ">
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
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
          {/* Link  */}
          <div className="ml-2 transition duration-100  mb-8 cursor-pointer hover:text-pink-600 text-1xl font-semibold ">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
