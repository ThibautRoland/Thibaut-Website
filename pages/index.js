import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import {Layout} from '../components/Layout'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <h1 className='bg-pink-400'>Thibaut website</h1>

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
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 bg-gray-200 my-4 p-4 w-full">

        <Link href={`/about`}>
          <div className="bg-green-100 p-4">Let me introduce myself...</div>
          </Link>

          <Link href={`/projects`}>
            <div className="bg-green-100 p-4">See Posts</div>
          </Link>

          <div className="bg-green-100 p-4">1</div>
          <div className="bg-green-100 p-4">1</div>
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
