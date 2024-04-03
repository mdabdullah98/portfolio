import { createContext, useContext, useState } from "react";

const mycontext = createContext({
  menuOpenCloseFunc: () => {},
  menu: false,
});

function ContextProvider({ children }) {
  const [menuOpen, setmenuOpen] = useState(false);

  const menuOpenClose = () => {
    setmenuOpen((prev) => !prev);
  };

  // this is for auto close menu

  let contextObj = {
    menuOpenCloseFunc: menuOpenClose,
    menu: menuOpen,
  };
  return <mycontext.Provider value={contextObj}>{children}</mycontext.Provider>;
}

function customContext() {
  return useContext(mycontext);
}
export { customContext, ContextProvider };
