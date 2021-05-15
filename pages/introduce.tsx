import Head from 'next/head';
import Layout , {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

export default function Introduce(){
    return (
        <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>システムエンジニア２年目のぺーペーです。<br />仕事では、JavaとJavaScriptで開発をしています。</p>
          <p>個人的に、フロントエンドを自主学習中で、勉強したこと、ガジェットなど五月雨にアウトプットしてきます。</p>
          <p>宜しくおねがいします。</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>
              <Link href='https://twitter.com/takeshshuhu'>
              <a>https://twitter.com/takeshshuhu</a>
              </Link>
          </h2>
        </section>
      </Layout>
    )
}