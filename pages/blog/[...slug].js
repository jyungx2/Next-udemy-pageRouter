import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query); // IF, url: blog/2020/12 => {slug: ['2020', '12']}
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
export default BlogPostsPage;
``;
