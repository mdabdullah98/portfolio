import React, { useState } from "react";
import styled from "styled-components";
import { Experience, Education } from "./Education_Experience";

const About = () => {
  const [btncolor, setBtnColor] = useState({
    experience: "",
    educations: "",
  });

  const [updateText, setUpdateText] = useState(Experience);

  const changeTextColorViaCount = (e) => {
    if (e.target.textContent === "Experience") {
      setBtnColor({
        experience: "exp",
        educations: "",
      });
      setUpdateText(Experience);
    }
    if (e.target.textContent === "Education") {
      setBtnColor({
        experience: "",
        educations: "edu",
      });

      setUpdateText(Education);
    }
  };
  return (
    <Div id="about">
      <ContentDiv>
        <BoxDiv>
          <div className="box-1">
            <img src="./user.png" alt="" />
          </div>

          <div className="box-2">
            <h3>About Me</h3>

            <h5 className="mb-1">
              Hi. I'm Md Abdullah, nice to meet you. Please take a look around
            </h5>
            <div className="skill-experience" onClick={changeTextColorViaCount}>
              <li className={`${btncolor.experience}`}>Experience</li>
              <li className={`${btncolor.educations}`}>Education</li>
            </div>
            <div className="education-experience-parent">{updateText}</div>
          </div>
        </BoxDiv>
      </ContentDiv>
    </Div>
  );
};

const Div = styled.div`
  width: 100vw;
`;
const ContentDiv = styled.div`
  width: 90%;
  margin: 8rem auto;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 2rem;
    margin: 2rem auto;
  }
`;
const BoxDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-1 {
    width: 40%;
    margin: 1rem;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
    }
  }

  .box-2 {
    color: white;

    .skill-experience {
      width: 70%;
      margin: 0.4rem 0;
      display: flex;

      li {
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(11.5px);
        -webkit-backdrop-filter: blur(11.5px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        list-style: none;
        color: white;
        margin-right: 1rem;
        font-size: 1.2rem;
        transition: color 0.5s;
        cursor: pointer;
        position: relative;
        padding: 0.2rem 0.4rem;
      }
      li.exp,
      li.edu {
        background: rgba(255, 0, 0, 0.7);
      }
    }

    p {
      font-size: 0.9rem;
    }
  }
  .education-experience-parent {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box-1 {
      width: 80%;
      order: 2;
      img {
        width: min(25rem, 50vw);
      }
    }

    .box-2 {
      width: 100%;
      order: 1;

      .skill-experience {
        width: 80%;

        li {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    .box-1 {
      width: 100%;
      img {
        width: 100%;
      }
    }

    .box-2 {
      width: 100%;

      p {
        font-size: 0.9rem;
      }
      .skill-experience {
        width: 100%;

        li {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default About;
