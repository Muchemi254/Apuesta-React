import React, { useState } from "react";
import NavBar from "../components/NavBar.tsx";
import FixtureList from "../Data/FixtureList.tsx";
import MainBets from "../components/MainBets.tsx";
import MyBets from "../components/MyBets.tsx";
import FootBar from "../components/FootBar.tsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="row align-items-start">
        <div className="col-md-3 d-md-block d-none">
          <FixtureList />
        </div>
        <div className="col-md-6">
          <MainBets />
        </div>
        <div className="col-md-3 d-md-block d-none">
          <MyBets />
        </div>
      </div>
      <FootBar />
    </div>
  );
};

export default Home;
