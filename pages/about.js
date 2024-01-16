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
      <h1 className="text-3xl font-bold mb-4">This is my presentation</h1>

      <div className="flex flex-col">
        {datas.map(({ txt, img }, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg mb-4">{txt}</p>
            <img src={img} alt={`Image ${index}`} className="w-full h-20 object-cover mb-4 rounded-md" />
          </div>
        ))}
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
