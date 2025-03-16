import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Teams from "../components/molecules/Team";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="team-team-container">
        <Teams />
      </div>
      <Footer />
    </>
  );
};

export default Team;
