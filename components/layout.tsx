import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const name = "@takeshuhu";
export const siteTitle = "@takeshushu'Blog";

export default function EditingLayout({
  children,
  home,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  title?: string;
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
          content="Next.js+TypeScript+TailwindCss+MicroCmsで技術ブログを作成tutorial"
        />
        <meta charSet="utf-8" />
        <meta name="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="Next.js+TypeScript+TailwindCss+MicroCmsで技術ブログを作成tutorial"
        />
        <meta
          property="og:type"
          content="enginnering next typescript tailwind microcms"
        />
        <meta property="og:url" content="microCMSblog/lyk9s3zka0z" />
        <meta
          property="og:image"
          content="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/panda_1f43c.png"
        />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="title" content={title} />
        <title>{title}</title>
      </Head>
      <div className="grid grid-cols-1 min-h-full auto-rows-auto w-screen">
        <div>
          <header className="w-screen bg-black bg-opacity-90">
            <div className="object-center">
              <div className="flex flex-row items-center justify-start p-2">
                <Link href="/">
                  <a className="text-white inline-flex font-serif font-light tracking-wide italic">
                    Java Enginnerの気まぐれ技術Blog
                  </a>
                </Link>
              </div>
            </div>
          </header>
        </div>
        <div className="grid grid-cols-1 pb-5 min-h-full xl:grid-cols-8">
          <div className="md:col-span-2"></div>
          <div className="col-span-4 p-5">
            <main>{children}</main>
            {!home && (
              <div className=" mx-auto mt-5 mb-0">
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            )}
          </div>
          <div className="p-20 md:col-span-2 min-h-full xl:p-3">
            <div className="grid grid-cols2 border-gray-100 border p-1 rounded shadow-xl bg-white">
              <div className="grid grid-cols-7">
                <div className="col-span-2">
                  <Image
                    className="rounded-full"
                    src="/images/IMG_4091.JPG"
                    alt="profile.image"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-span-5">
                  <div className="grid grid-rows-4">
                    <div className="row-span-3">
                      <h1 className=" text-5xl font-bold pt-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent xl:text-2xl">
                        shuji takeda
                      </h1>
                    </div>
                    <div className="row-span-1 space-x-2">
                      <div className="inline">
                        <a href="https:twitter.com/takeshshuhu">
                          <Image
                            src="/icons/twitter.svg"
                            width={25}
                            height={25}
                          />
                        </a>
                      </div>
                      <div className="inline">
                        <a href="https:github.com/shuji-takeda">
                          <Image
                            src="/icons/github.svg"
                            width={25}
                            height={25}
                          />
                        </a>
                      </div>
                      <div className="inline">
                        <a href="mailto:12.hack.17@gmail.com">
                          <Image
                            src="/icons/gmail.svg"
                            width={25}
                            height={25}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-mono space-y-1 px-5 py-5 xl:pt-5">
                <p>
                  work in system enginner.
                  <br />
                  about three years.
                  <br />
                  `Java`,`js`,`Spring`,`Angular`
                  <br />
                  Self Studyng: `ts`,`Next`,`React`,`Go`
                  <br />
                  Laid back enginner life.
                  <br />
                  Thanks!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 py-10 border-black border-t-1 grid">
          <footer className="w-screen">
            <div className=" mr-auto flex-row">
              <p className="text-center text-base md:text-lg">
                2021 ©Shuji Takeda All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
