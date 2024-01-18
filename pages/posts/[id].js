import { getAllPostIds, getPostData } from '../../lib/posts';
import {Layout} from '../../components/Layout'

export default function Post({postData}) {
  return (
    <Layout>
      <div className="">
            <div>{postData.label}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData =  await getPostData(params.id);
  console.log("GET STATIC PROPS", postData)
  return {
    props: {
      postData,
    },
  };
}
