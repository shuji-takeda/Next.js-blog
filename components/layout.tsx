import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import React from "react";

const name = "@takeshuhu";
export const siteTitle = "@takeshushu'Blog with Next.js";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/panda_1f43c.png"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header className="flex flex-col items-center top-0"> */}
      <header className=" w-screen bg-black bg-opacity-90">
        {home ? (
          <>
            <div className="object-center">
              <div className="flex flex-row items-center justify-start p-2">
                {/* <div className="inline-flex pr-1">
                  <Image
                    src="/images/vercel.png"
                    alt="headerProfile"
                    width={50}
                    height={50}
                  />
                </div> */}
                {/* <div>header</div> */}
                <p className="text-white inline-flex font-serif font-light tracking-wide italic">
                  Java Enginnerの気まぐれ技術Blog
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="object-center">
              <div className="flex flex-row items-center justify-start p-2">
                {/* <div className="inline-flex pr-1">
                  <Image
                    src="/images/vercel.png"
                    alt="headerProfile"
                    width={50}
                    height={50}
                  />
                </div> */}
                {/* <div>header</div> */}
                <Link href="/">
                  <a className="text-white inline-flex font-serif font-light tracking-wide italic">
                    Java Enginnerの気まぐれ技術Blog
                  </a>
                </Link>
              </div>
            </div>
          </>
        )}
      </header>
      <div className={styles.container}>
        <main className="pt-5">{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <footer className="pt-5">
          <div className=" mr-auto flex-row border-t-2">
            <div>
              <Link href="introduce">
                <a className="no-underline hover: bg-gray-400">
                  <h1 className="text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold text-xl md:text-6xl">
                    Shuji Takeda
                  </h1>
                </a>
              </Link>
            </div>
            <div className="pt-5">
              <ul className="p-2 text-center justify-start">
                <li className=" pb-1 space-x-1">
                  <Image src="/icons/twitter.svg" width={20} height={20} />
                  <a href="https://twitter.com/takeshshuhu">@takeshushu</a>
                </li>
                <li className="pb-1 space-x-1">
                  <Image src="/icons/github.svg" width={20} height={20} />
                  <a href="https://github.com/shuji-takeda">@shuji-takeda</a>
                </li>
                <li className="pb-1 space-x-1">
                  <Image src="/icons/gmail.svg" width={20} height={20} />
                  <a>12.hack.17@gmail.com</a>
                </li>
              </ul>
            </div>
            <p className="text-center">
              2021 ©Shuji Takeda All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
