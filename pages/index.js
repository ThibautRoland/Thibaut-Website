import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Thibaut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<h1>Thibaut website</h1>

<ul>
{allPostsData.map(({ id, date, title }) => (
   <Link  key={id} href={`/posts/${id}`}>

      <li key={id}>
                {title}  -  {id} - {date}
      </li>

    </Link>
          ))
}
</ul>
      </main>

    </div>
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
