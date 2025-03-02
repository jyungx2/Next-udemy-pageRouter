import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  // 💡 프로그래매틱 내비게이션 (코드에서 직접 페이지 이동)
  // * router.push(): Link 대신 코드에서 직접 페이지 이동 가능. (=> 순수 리액트에서 useNavigate() 훅 사용하는 것과 마찬가지)
  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[projectId]",
      query: { id: "max", projectId: "projectA" },
    });
    // router.push()	새로운 페이지로 이동 (기존 페이지 유지)	⭕ 가능
    // router.replace()	현재 페이지를 새로운 페이지로 교체❌ 불가능 => 사용자가 뒤로 가기(Back 버튼)를 눌러도 이전 페이지로 돌아갈 수 없음.
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
