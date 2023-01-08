import React, { useState } from "react";
import { getAboutMe } from "../../services";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import Link from "next/link";
const AboutMe = ({
  aboutme,
  InfoTitle,
  ImageMe,
  contentMe,
  authorName,
  authorImage,
  InfoTitleHeader,
  createAt,
}) => {
  const [ratio, setRatio] = useState(3 / 2);
  return (
    <div className="block mt-10 px-10">
      <div className="container mx-auto text-center leading-7 ">
        <h1 className="font-bold text-2xl text-gray-700 dark:text-white">
          {InfoTitle}
        </h1>
        <div className=" flex flex-row justify-center text-start w-full mt-10 mx-auto">
          <div className="flex flex-wrap text-center items-center mx-5    ">
            <div className="text-center items-center">
              <Image
                src={authorImage[0]}
                alt="test"
                width={60}
                height={60}
                layout="intrinsic"
              />
            </div>
            <div className=" md:mx-4 xl:block xl:mx-4">
              <p className="text-start text-xl font-bold">{authorName}</p>
              <p className="text-sm">
                {moment(createAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
          <div className="sm:max-w:sm max-w-lg ">
            <RichText
              content={InfoTitleHeader[0]}
              renderers={{
                h1: ({ children }) => (
                  <h1 className="text-black text-2xl font-bold dark:text-white">
                    {children}
                  </h1>
                ),
              }}
            />
          </div>
        </div>
      </div>

      {/* Image Big */}
      <div className="block w-full mt-12 container mx-auto xl:min-w-max text-center">
        <Image
          src={ImageMe[0]}
          alt="it me"
          width={1200}
          height={1200}
          layout="responsive"
          objectFit="cover"
          className="w-100"
          onLoadingComplete={({ naturalWidth, naturalHeight }) => {
            setRatio(naturalWidth / naturalHeight);
          }}
        />
      </div>
      {/* COntent */}
      <div className="container mx-auto mt-16 ">
        <div className="xl:px-80">
          <RichText
            content={contentMe[0]}
            renderers={{
              h4: ({ children }) => (
                <h1 className="text-black dark:text-white text-start text-4xl font-bold">
                  {children}
                </h1>
              ),
              p: ({ children }) => (
                <p className="text-lg leading-8 font-sans mt-5 ">{children}</p>
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
    </div>
  );
};

export default AboutMe;

export async function getStaticProps() {
  const aboutme = await getAboutMe();
  const InfoTitle = aboutme.aboutMes.map((value) => value.name);
  const ImageMe = aboutme.aboutMes.map((value) => value.imageme.url);
  const contentMe = aboutme.aboutMes
    .map((value) => value.contentme)
    .map((value) => value.raw);

  const authorName = aboutme.authors.map((value) => value.name);
  const authorImage = aboutme.authors.map((value) => value.photo.url);
  const InfoTitleHeader = aboutme.aboutMes.map((value) => value.infotitle.raw);
  const createAt = aboutme.aboutMes.map((value) => value.createdAt);

  return {
    props: {
      InfoTitle,
      ImageMe,
      aboutme,
      contentMe,
      authorName,
      authorImage,
      InfoTitleHeader,
      createAt,
    },
  };
}
