import withAuth from "@/hocs/withAuth";

function Home({ currentUser }) {
  return <div className="Home">Welcome {currentUser.email}</div>;
}

export default withAuth(Home);
