import React from "react";
import styled from "styled-components";
import SocialMediaCompo from "./SocialMedia";
import Typewriter from "typewriter-effect";

const Herosec = () => {
  return (
    <MainDiv id="home">
      <Div>
        <ContetnDiv>
          <h5>Hello, Its Me</h5>
          <h1 className="myname "> Md Abdullah </h1>
          <h3 className="desig mt-4 mb-2">
            <Typewriter
              options={{
                strings: [
                  "React Js Developer",
                  "Problem Solving Skills",
                  "Good in Communication Skills",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <SocialMediaCompo />
          <Button
            Btncolor="cyan"
            heart_pump="heart_pump"
            textColor="black"
            className="my-2"
          >
            <a href="./md_abdullah.pdf" download={true} title="download CV">
              Resume
            </a>
          </Button>
        </ContetnDiv>
      </Div>
    </MainDiv>
  );
};

const MainDiv = styled.section`
  width: 100vw;
  height: 80vh;
  padding: 7rem 0 0 0;
`;

const Div = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
  line-height: 4;

  @media screen and (max-width: 600px) {
    width: 90%;
    /* padding: 0.5rem; */
  }
`;

const ContetnDiv = styled.div`
  width: max(85%, 60vw);
  line-height: 1.8;
  color: white;
  .myname {
    font-size: 5rem;
    font-weight: bold;
    color: orangered;
  }
  .desig {
    font-size: 3.5rem;
    font-weight: bold;
    color: lightgray;
  }

  @media screen and (max-width: 820px) {
    .myname {
      font-size: 4rem;
    }
    .desig {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .myname {
      font-size: 2.5rem;
    }
    .desig {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 470px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  width: 10rem;
  padding: 0.2rem 1.3rem;
  background: ${(props) => props.Btncolor};
  border-radius: 1rem;
  border: none;
  box-shadow: 0rem 0rem 1rem ${(props) => props.Btncolor},
    0rem 0rem 2.5rem ${(props) => props.Btncolor};
  animation: ${(props) => props.heart_pump} 1.5s infinite backwards;

  a {
    text-decoration: none;
    color: ${(props) => props.textColor};
  }
  @keyframes heart_pump {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1);
    }
    0% {
      transform: scale(1.2);
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`;

export default Herosec;
