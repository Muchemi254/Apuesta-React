const FixtureCard = ({ fixture }) => {
  return (
    <>
      <div className="fixture-card text-center">
        <div className="row">
          <div className="col">
            <p className="small">Date: {fixture.fixture.date}</p>
          </div>
          <div className="col">
            <p className="small">
              {fixture.teams.home.name} {fixture.goals.home}{" "}
              {fixture.fixture.status.short} {fixture.goals.away}{" "}
              {fixture.teams.away.name}
            </p>
          </div>
          <div className="col">
            <p className="small">Venue: {fixture.fixture.venue.name}</p>
          </div>
        </div>
      </div>
      <div className="">
        <hr />
      </div>
    </>
  );
};

export default FixtureCard;
