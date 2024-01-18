import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import { Layout } from '../components/Layout';
import Link from 'next/link';

export default function About({ allPostsData }) {
  const datas = [
    {
      txt: "blablablabla, j'ai commencé par ça",
      img: "https://www.meme-arsenal.com/memes/5dad8397f3ba2346909d49526e1a3417.jpg",
    },
    {
      txt: "blablablabla, j'ai commencé par ça",
      img: "https://www.meme-arsenal.com/memes/5dad8397f3ba2346909d49526e1a3417.jpg",
    },
    {
      txt: "blablablabla, j'ai commencé par ça",
      img: "https://www.meme-arsenal.com/memes/5dad8397f3ba2346909d49526e1a3417.jpg",
    },
    {
      txt: "blablablabla, j'ai commencé par ça",
      img: "https://www.meme-arsenal.com/memes/5dad8397f3ba2346909d49526e1a3417.jpg",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <div className=''>
        <h1 className="text-3xl font-bold mb-4 text-center mt-7">A little bit about me...</h1>
{/*
        <div className="flex flex-col">
          {datas.map(({ txt, img }, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <p className="text-lg mb-4">{txt}</p>
              <img src={img} alt={`Image ${index}`} className="w-full h-20 object-cover mb-4 rounded-md" />
            </div>
          ))}
        </div> */}
        <div className="leading-loose text-lg">
          <p>Junior Web developer, I'm looking for a job in Paris, in an international environment if possible, to mark the start of a career in tech.</p>
          <p>After having attended a business school for which my interest was not at its peak, I decided to make a start in web dev.</p>
          <p>I am now convinced to have found my path. </p>
          <p>Thoroughness, mathematical logic (I was a math tutor to highschoolers for 1.5y), socially comfortable, very sporty are my main soft skills.</p>
          <p>My coding bootcamp at <strong>Le Wagon</strong> allowed me to acquire skills in object oriented programming and algorithmic. My strong interest for this field will allow me, for sure, to expend my set of skills to other stacks and frameworks.</p>
          <p>I fluently speak and write French (native tongue) and English (TOEFL iBT 102 in 2017) y tengo un nivel correcto de español.</p>
          <p>I am currently a <em>teacher assistant</em> at <strong>Le Wagon</strong> as an auto-entrepreneur, I remain available on a short notice.</p>
          <p>I am looking forward to showing my will to perform in this line of work.</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
