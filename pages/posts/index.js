import Link from "next/link";
export default function PostList({ posts }) {
  return (
    <>
      <h1  align="center" style={{color:"red"}}>List of posts</h1>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`} passHref><h6 align="center"
          >{post.id} {post.title}</h6>
          </Link>
        ) ;
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json()
  return { props: { posts: response } };
}
