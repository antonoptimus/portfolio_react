import React from "react";
import project from "../img/projects/01.jpg";
const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project}
                  alt="Project"
                  className="project__image"
                />
                <h3 className="project__title">Mern blog</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project}
                  alt="Project"
                  className="project__image"
                />
                <h3 className="project__title">Ai summarizer</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project}
                  alt="Project"
                  className="project__image"
                />
                <h3 className="project__title">Ai t-shirt</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project}
                  alt="Project"
                  className="project__image"
                />
                <h3 className="project__title">Lofthouse</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project}
                  alt="Project"
                  className="project__image"
                />
                <h3 className="project__title">Jobsearch</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project}
                  alt="Project"
                  className="project__image"
                />
                <h3 className="project__title">Marvel</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
