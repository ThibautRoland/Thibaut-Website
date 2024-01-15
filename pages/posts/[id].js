import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({postData}) {
  return <div>
        <div>{postData.label}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </div>
  ;
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
