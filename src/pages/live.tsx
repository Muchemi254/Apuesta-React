import NavBar from "../components/NavBar.tsx";
import LiveFixtures from "../components/LiveFixtures.tsx"
import ListGroup from "../components/ListGroup.tsx";
import MyBets from "../components/MyBets.tsx";

const Live = () => {
  return (
    <div className="row align-items-start">
      <NavBar />
      <ListGroup />
      <LiveFixtures/>
      <MyBets />
    </div>
  );
};

export default Live;
