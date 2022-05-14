import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import Image from 'next/image';
import { client } from 'lib/client';
import { Article } from 'domain/type';
import HeaderTag from '@/components/headerTag';
import Head from '@/components/headTag';
import FooterTag from '@/components/footerTag';
import Footer from '@/components/footer';
import Tags, { TagsType } from '@/components/tags';

const category: TagsType[] = [
  { name: 'Java' },
  { name: 'Spring' },
  { name: 'SpringBoot' },
  { name: 'Mysql' },
  { name: 'Oracle' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Vue' },
  { name: 'Express' },
];

const tag: TagsType[] = [
  { name: 'Tags' },
  { name: 'Spring' },
  { name: 'SpringBoot' },
  { name: 'Mysql' },
  { name: 'Oracle' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Vue' },
  { name: 'Express' },
];

const defaultImagePath = '/images/background.jpg';

export default function Samp(props: Article) {
  useEffect(() => {
    getAnker();
  });

  const { id, title, content, publishedAt, category } = props;
  return (
    <>
      <Head />
      <HeaderTag />
      <main className="container mx-auto mt-2 sm:mt-5">
        <div className="flex flex-col sm:flex-row">
          <div id="container" className=" w-full mx-auto sm:w-1/2 sm:mr-0">
            <Image
              src={defaultImagePath}
              layout="responsive"
              width={375}
              height={250}
            />
            <div id="pankuzuList">pankuzuList</div>
            <div id="title">{title}</div>
            <div id="category">Category</div>
            <div id="tags">
              <Tags tags={category} />
            </div>
            <div id="postedAt">
              <p>{}</p>
            </div>
            <div id="MOKUJI">mokuji</div>
            <div id="mainContent">mainContent</div>
          </div>
          <div className="w-screen flex flex-col sm:w-3/12">
            <Tags title="Category" tags={} />
            <Tags title="Tags" tags={tag} />
          </div>
        </div>
      </main>
      <FooterTag />
    </>
  );
}

export const getStaticProps = async () => {
  const data: Article = await client.get({ endpoint: `blog/nki-hj-7_xth` });
  return {
    props: { data: data },
  };
};

export const getAnker = () => {
  const ankerList = document.querySelectorAll('h1');
  ankerList.forEach((element) => {
    const newElement = document.createElement('a');
    const newContent = document.createTextNode(element.innerText);
    newElement.appendChild(newContent);
    newElement.setAttribute('href', '#' + element.id);

    const parentDiv = document.getElementById('anker');

    const indent = document.createElement('br');
    if (parentDiv !== null) {
      parentDiv.appendChild(newElement);
      parentDiv.appendChild(indent);
    }
  });
};
