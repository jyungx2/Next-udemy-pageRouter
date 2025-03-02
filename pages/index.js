import Link from "next/link"; // Next.js의 내장 Link 컴포넌트를 활용

// index.js 파일을 생성하면, Next.js는 이 파일을 **루트 페이지(/)**로 인식하여 기본적으로 렌더링합니다.
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        {/* <a href="/portfolio">Portfolio</a> 방식의 일반 HTML 링크를 사용할 경우, 
        클릭 시 새로운 HTTP 요청이 발생하여 전체 페이지가 다시 로드됨... 
        > 1) React 앱의 전역 상태 (예: Redux, Context API) 가 초기화될 수 있음.
        > 2) CSR 방식의 장점이 사라지므로, Next.js에서는 적합 */}
        {/* ✅ 페이지가 이동해도 새로운 HTTP 요청 없이 SPA(Single Page Application)처럼 동작. */}
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        {/*  */}
      </ul>
    </div>
  );
}

export default HomePage;
