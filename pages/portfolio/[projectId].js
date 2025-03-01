import { useRouter } from "next/router";

function PortfolioProjectPage() {
  console.log(useRouter.pathname); // /portfolio/[projectId]
  console.log(useRouter.query); // {} -> {projectId: "something"} => gives us access to the concrete data that is encoded in the URL.

  // send a request to some backend server to fetch the piece of data with an id of router.query.projectId

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
