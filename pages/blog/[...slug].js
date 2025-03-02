import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query); // IF, url: blog/2020/12 => {slug: ['2020', '12']}
  // Catch-All Route ([...slug].js)에서는 배열(Array) 형식으로 반환됨.
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
export default BlogPostsPage;

// 💡 Catch-All Routes (모든 경로를 포착하는 라우트)
// Next.js에서 동적 라우팅을 다룰 때, 단순히 [id].js와 같은 동적 세그먼트뿐만 아니라, 더 확장된 개념이 있음.
// blog 폴더가 있다고 가정하면, 다양한 URL 형식을 지원할 수 있음.

// 예를 들면:
// /blog/the-id-of-a-post → 특정 게시글
// /blog/2020/12/the-id-of-a-post → 특정 연월의 특정 게시글
// /blog/2020/12 → 특정 연월의 전체 게시글
// 이러한 여러 URL 패턴을 하나의 컴포넌트에서 처리하려면, Next.js의 Catch-All Routes 기능을 사용할 수 있음.

// 활용 사례:
// 여러 개의 동적 세그먼트가 존재할 수 있는 경우 (예: 날짜별, 카테고리별 라우트)
// URL 구조가 가변적인 경우 (예: 검색 필터가 다르게 적용될 수 있는 경우)
// 하나의 컴포넌트에서 다양한 경로 패턴을 처리하고 싶을 때
