import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import imageHeader from "../public/imageHeader.webp";
import Image from "next/image";
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog Vinh-Dev-Noob</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Trải nghiệm thực tập" />
        <meta property="og:title" content="Vinh Dev-Noob" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageHeader.src} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vinh Dev-Noob" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container mx-auto px-10 mb-8 bg-white dark:bg-[#1C1E21] dark:text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
          </div>

          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              {/* <Categories /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
