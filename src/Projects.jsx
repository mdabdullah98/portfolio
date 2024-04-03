import React, { useRef } from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

const projectDesc = [
  {
    id: "Projec-1",
    projectName: "Mail Box Client",
    projectInfo:
      "I used Firebase for the authentication, storing realtime data and hoisting. React router for the navigation and styled component for handling the CSS",
    img: "./Mail_processing.png",
    demo: "https://mail-box-client-efeff.web.app/",
    github: "https://github.com/mdabdullah98/Mail_Box_client",
  },

  {
    id: "Projec-2",
    projectName: "Expense Tracker",
    projectInfo:
      "Redux for state management and for handling Api's, Firebase for authentication .React-router-dom for routing and securiting routes and other packages.",
    img: "./Expense-Tracker-banner.png",
    demo: "https://expense-tracker-4a347.web.app/",
    github: "https://github.com/mdabdullah98/ExpenseTracker",
  },
  {
    id: "Projec-3",
    projectName: "Blog-App",
    projectInfo:
      "Design an intuitive and user-friendly interface that allows users to add blog and navigate seamlessly. Any user can create an account  and login .",

    img: "./pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png",
    demo: "https://blog-project-58050.web.app/",
    github: "https://github.com/mdabdullah98/blog",
  },
];

const Projects = () => {
  return (
    <ProjectMainDiv id="projects">
      <ProjectSecDiv>
        <CenterHeadingDiv>
          <h1>
            Latest <span>Projects</span>
          </h1>
        </CenterHeadingDiv>
        <ProjectDiv>
          <ProjectGrid>
            {projectDesc.map(({ id, projectName, img, projectInfo, demo }) => {
              return (
                <React.Fragment key={id}>
                  <div className="parent-grid-div">
                    <img src={`${img}`} alt="" />
                    <span className="child-show-on-hover">
                      <h3 className="text-center text-light">{projectName}</h3>
                      <p>{projectInfo}</p>
                      <div className="btn-group">
                        <button type="button">
                          <a href={`${demo}`} target={"_blank"}>
                            Demo <FiExternalLink className="external-link" />
                          </a>
                        </button>
                      </div>
                    </span>
                    <p className="projectinfo hide-project-info-on-hover">
                      {projectInfo}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </ProjectGrid>
        </ProjectDiv>
      </ProjectSecDiv>
    </ProjectMainDiv>
  );
};

const ProjectMainDiv = styled.div`
  width: 100vw;
`;

const ProjectSecDiv = styled.div`
  width: 90%;
  height: 100%;
  padding: 5rem 1rem;
  margin: 0 auto;
`;

const CenterHeadingDiv = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    color: white;

    font-weight: bolder;
  }
  h1 span {
    color: cyan;
  }
`;

const ProjectDiv = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  align-content: center;
  padding-top: 4rem;

  .parent-grid-div {
    transition: transform 0.3s;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    color: white;
    text-align: center;
    border: 1px solid #fff;

    img {
      width: 100%;
      height: 14rem;
    }

    .child-show-on-hover {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: linear-gradient(rgb(0, 0, 0), rgb(0, 225, 255));
      transition: height 0.5s;
      opacity: 0.9;

      .btn-group {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
          padding: 0.5rem 0.8rem;
          border-radius: 1rem;
          border: none;
          background: #fff;
          margin: 0 1rem;

          a {
            text-decoration: none;
            color: black;
          }
          .external-link {
            margin-bottom: 0.3rem;
            transition: 0.5s;
          }
          &:hover .external-link {
            color: red;
            transform: scale(1.5);
          }
        }
      }
    }
    .projectinfo.hide-project-info-on-hover {
      display: flex;

      background: linear-gradient(rgb(0, 0, 0), rgb(0, 225, 255));
      border-radius: 0.5rem;
      padding: 0.8rem 0.5rem;
      margin: 0;
    }
    &:hover {
      transform: translateY(-0.5rem);
    }
    &:hover span {
      height: 100%;
    }
    &:hover .projectinfo.hide-project-info-on-hover {
      display: none;
    }
    &:hover {
      img {
        height: 17rem;
        transition: height 0.2s;
      }
    }
  }
  @media (max-width: 600px) {
    gap: 5rem;
  }
`;

export default Projects;
