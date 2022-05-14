import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout';

export default function Introduce() {
  return (
    <Layout>
      <Head>
        <title>@takeshushu's Profile</title>
      </Head>
      <main>
        <div className=" container mx-auto p-5 grid grid-cols-1">
          <div className="flex items-start p-10">
            <div className=" w-4/12">
              <Link href="/">
                <a>
                  <img
                    src="https://obs.line-scdn.net/r/avatar/share/68895f9d9e764ada865ed816be35b31d__full.png"
                    alt="profile"
                    className="w-full rounded-full"
                  />
                </a>
              </Link>
            </div>
            <div className="">
              <div>
                <p className=" text-base">
                  システムエンジニア2年目
                  <br />
                  仕事では、Java、Javascriptを使用しています。
                </p>
                <p>
                  個人で、Typescript、Next.js、React
                  nativeなどを勉強しております。
                </p>
                <p className=" text-base">
                  ・Java
                  <br />
                  ・TypeScript
                  <br />
                  ・Next.js
                  <br />
                  ・React
                </p>
                <p className=" text-base">
                  技術、ガジェットなど学んだことを、OutPutしてきます。
                  <br />
                  ゆるーく、お願いします
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
