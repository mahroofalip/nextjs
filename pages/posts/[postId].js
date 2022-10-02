export default function PostDetils({ post }) {
  return (
    <>
      <div>
        {post.id} {post.title}
      </div>
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
      {
        params: { postId: "5" },
      },
    ],
    fallback:false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  ).json();
  return {
    props: {
      post: response,
    },
  };
}
