import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import {Layout} from '../components/Layout'
import Link from 'next/link'

export default function Projet({ allPostsData }) {
  return (
<Layout>
  <h1 className="bg-pink-400 text-white font-bold py-4 text-2xl mb-4">Mes projets</h1>

  <ul className="space-y-4">
    {allPostsData.map(({ id, date, title }) => (
      <Link key={id} href={`/posts/${id}`}>
        <li
          key={id}
          className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-gray-600">{id} - {date}</p>
        </li>
      </Link>
    ))}
  </ul>
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
