import React from "react";
import styled from "styled-components";
import { BsTelegram } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import SocialMediaCompo from "./SocialMedia";
import { Button } from "./Herosec";
import ContactForm from "./ContactForm";

const MainOuterDiv = styled.div`
  width: 100vw;
  padding: 3rem 0;
`;
const Heading_1 = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  span {
    color: cyan;
  }
`;
const SecOuterDiv = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .box-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0.5;
    margin: 1rem;
    color: orangered;
    .react-icons {
      margin: 1rem 1rem 1rem 0;
    }
  }
  .box-2 {
    flex: 1;
    margin: 1rem;
  }

  @media screen and (max-width: 500px) {
    width: 97%;
    padding: 1rem;
    .box-1,
    .box-2 {
      flex: 1;
      padding: 0;
      margin: 0;
    }
  }
`;

const ContactUs = () => {
  return (
    <React.Fragment>
      <MainOuterDiv id="contactUs">
        <Heading_1>
          Contact <span>Me !</span>
        </Heading_1>
        <SecOuterDiv>
          <div className="box-1">
            <div className="d-flex align-items-center">
              <span className="react-icons">
                <BsTelegram />
              </span>
              <a
                className="text-light"
                href="mailto:abdulhussain78615@gmail.com"
              >
                abdulhussain78615@gmail.com
              </a>
            </div>
            <div>
              <span className="react-icons">
                <FiPhoneCall />
              </span>
              <a
                className="text-light text-decoration-none"
                href="tel:+918010565692"
              >
                +91 8010565692
              </a>
            </div>

            <div>
              <SocialMediaCompo />
            </div>
            <Button Btncolor="orangered" textColor="white">
              <a href="./md_abdullah.pdf" download={true} title="download CV">
                Resume
              </a>
            </Button>
          </div>
          <div className="box-2">
            <ContactForm />
          </div>
        </SecOuterDiv>
      </MainOuterDiv>
    </React.Fragment>
  );
};

export default ContactUs;
