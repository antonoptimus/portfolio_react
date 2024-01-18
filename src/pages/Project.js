import React from "react";
import img from "../img/projects/01-big.jpg";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const Project = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">Mern blog</h1>
            <img src={img} alt="" className="project-details__cover" />
            <div className="project-details__desc">
              <p>Skills: React, Node.js, MongoDB</p>
            </div>
            <BtnGitHub link="LINK TO REPO"/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
