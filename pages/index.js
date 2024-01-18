import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import {Layout} from '../components/Layout'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';

export default function Home({ allPostsData }) {
  return (
    <Layout>

      {/* <ul>
        {allPostsData.map(({ id, date, title }) => (
          <Link  key={id} href={`/posts/${id}`}>

          <li key={id}>
          {title}  -  {id} - {date}
          </li>

          </Link>
          ))
        }
      </ul> */}
      <div className="mx-auto ">
        <h1 className='text-center text-2xl mt-7'>Thibaut website</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 p-4 w-full">

        <Link href={`/about`}>
          <div className="flex text-xl p-4 min-h-64 border-slate-700 rounded-lg items-center justify-center shadow-lg hover:shadow-xl transition duration-300">Let me introduce myself...</div>
          </Link>

          <Link href={`/projects`}>
            <div className="flex text-xl p-4 min-h-64 border-slate-700 rounded-lg items-center justify-center shadow-lg hover:shadow-xl transition duration-300">See Posts</div>
          </Link>
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
