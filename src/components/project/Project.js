import React from "react";
import "./style.css";
import project from "../../img/projects/01.jpg";

const Project = () => {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={project} alt="Project" className="project__image" />
          <h3 className="project__title">Mern blog</h3>
        </a>
      </li>
    </>
  );
};

export default Project;
