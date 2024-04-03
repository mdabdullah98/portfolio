import React from "react";
import styled from "styled-components";

const SocialMediaCompo = () => {
  return (
    <SocialMedia>
      <li>
        <a href="#">
          <i className="bi bi-linkedin social-icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bi bi-github social-icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bi bi-twitter social-icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bi bi-instagram social-icon"></i>
        </a>
      </li>
    </SocialMedia>
  );
};

const SocialMedia = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;

  li {
    width: 2rem;
    height: 2rem;
    border: 2px solid cyan;
    border-radius: 50%;
    position: relative;
    list-style: none;
    margin-right: 1rem;
    a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .social-icon {
        color: #df5625;
        font-size: 1rem;
      }
    }
    &:hover {
      transform: translateY(-0.7rem);
      transition: transform 0.5s;
    }
  }
`;

export default SocialMediaCompo;
