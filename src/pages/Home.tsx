import NavBar from "../components/NavBar.tsx";
import "https://widgets.api-sports.io/2.0.3/widgets.js";
import getData from "../Data/FixtureList.tsx";
import { useEffect, useState } from "react"; // Import the getData function
import FixtureCard from "../components/FixtureCard.tsx";

const Home = () => {
  const [fixtureData, setFixtureData] = useState(null); // Initialize fixtureData as null

  useEffect(() => {
    // Use an async function within useEffect to fetch the data
    const fetchData = async () => {
      try {
        const response = await getData();
        setFixtureData(response.response); // Set fixtureData in the component's state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function within useEffect
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      {fixtureData ? ( // Render data if fixtureData is not null
        <div>
          <h1>Fixture List</h1>
          <div className="fixture-list">
            {fixtureData.map((fixture: never, index: never) => (
              <FixtureCard key={index} fixture={fixture} />
            ))}
          </div>
        </div>
      ) : (
        // Render a loading message or handle cases where data is not available yet
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
