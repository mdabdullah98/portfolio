import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { customContext } from "./Context";
const Div = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: min(19rem, 70vw);
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 3rem 2.1rem;
  position: fixed;
  animation: slide-left 1s ease forwards;

  @keyframes slide-left {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    25% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(20%);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .close-menu {
    font-size: 1.6rem;
    color: white;
    cursor: pointer;
  }
`;
const UnorderList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  li {
    list-style: none;
    margin: 2rem 0;
    transition: color, transform 0.5s;
    a {
      text-decoration: none;
      color: cyan;
      font-size: 1.2rem;
      text-transform: capitalize;
    }
    &:hover,
    &:hover a {
      transform: scale(1.3);
    }
  }
`;

const SideNav = ({ children }) => {
  return ReactDOM.createPortal(
    <Modals>{children}</Modals>,
    document.getElementById("sideNav-menu")
  );
};

export default SideNav;

function Modals() {
  const cntxt = customContext();
  const menuopenClose = cntxt.menu;

  const closeMenuHandler = () => {
    cntxt.menuOpenCloseFunc();
  };

  const closeMenuViaNavItem = () => {
    cntxt.menuOpenCloseFunc();
  };

  return (
    <>
      <Div>
        <div className="w-100 d-flex justify-content-end ">
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: menuopenClose ? 2 : 1 }}
            transition={{
              default: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <AiOutlineCloseCircle
              className="close-menu"
              onClick={closeMenuHandler}
            />
          </motion.div>
        </div>
        <h1 className="mb-2 text-light">Portfolio</h1>
        <UnorderList onClick={closeMenuViaNavItem}>
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
        </UnorderList>
      </Div>
    </>
  );
}
