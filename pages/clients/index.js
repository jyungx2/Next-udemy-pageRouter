import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "max", name: "Maximillian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          // 💥 Link 컴포넌트의 href 속성에 문자열을 전달하는 방식이 일반적, 하지만 동적 경로를 직접 문자열로 조합하는 것이 번거로울 수 있음.
          // ✅ 대안: 객체(Object) 기반 href
          // Next.js에서는 href에 객체를 전달하는 방법도 지원함.
          // pathname과 query 속성을 이용해 동적 경로를 정의 가능.
          // 객체 방식을 사용하면 동적 라우트를 보다 명확하게 정의 가능.
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
