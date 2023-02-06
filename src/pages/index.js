import withAuth from "@/hook/withAuth";

function Home({ currentUser }) {
  return <div className="Home">Welcome {currentUser.email}</div>;
}

export default withAuth(Home);
