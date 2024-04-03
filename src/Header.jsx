import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "./SideNav";
import { customContext } from "./Context";

function Header() {
  const conTxt = customContext();
  const menuOpenClose = conTxt.menu;
  const menuhandler = () => {
    conTxt.menuOpenCloseFunc();
  };

  return (
    <>
      <Section>
        <HeaderDiv>
          <nav className="nav">
            <div className="nav-brand">
              <h2>
                <a href="#home">Portfolio</a>
              </h2>
            </div>
            <div className="nav-links">
              <ul className="ul-list">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contactUs">Contact</a>
                </li>
              </ul>
            </div>
          </nav>

          <GiHamburgerMenu className="menu-hamburger " onClick={menuhandler} />
          {menuOpenClose && <SideNav />}
        </HeaderDiv>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
`;
const HeaderDiv = styled.div`
  background: rgba(150, 236, 63, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 90%;
  margin: 0 auto;
  position: fixed;
  color: white;
  z-index: 5;
  .menu-hamburger {
    display: none;
  }
  .nav {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    .nav-brand {
      flex: 1;
      h2 {
        text-transform: uppercase;
        font-size: 2rem;
        margin: 0;
        text-align: center;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }

    .nav-links {
      flex: 1;
      .ul-list {
        display: flex;
        margin: 0;

        li {
          list-style: none;
          margin: 0 1.5rem;
          transition: transform 0.3s;

          a {
            text-decoration: none;
            color: white;
            text-transform: capitalize;
            font-size: 1.3rem;
          }

          &:hover a {
            color: orangered;
          }
        }
      }
    }
  }

  /* media query start here */
  @media screen and (max-width: 880px) {
    background: none;
    box-shadow: none;
    border: none;
    .nav {
      display: none;
    }
    .menu-hamburger {
      margin-top: 1.5rem;
      position: absolute;
      right: 0;
      top: 5%;
      font-size: 1.5rem;
      color: #ffffff;
      cursor: pointer;
      display: block;
    }
  }
`;

export default Header;
