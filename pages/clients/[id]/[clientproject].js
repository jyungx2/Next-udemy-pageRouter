import { useRouter } from "next/router";
function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query); // ex) {id: 'max', clientproject: 'prj1'}
  // you always get access to all the concrete values for the different placeholders that might've been part of the overall path for which this component was loaded.

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client.</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
