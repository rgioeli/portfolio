import { createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [toggleProjectsPanel, setToggleProjectsPanel] = useState(false);
  const [toggleContactPanel, setToggleContactPanel] = useState(false);

  return (
    <Context.Provider
      value={{
        toggleContactPanel,
        setToggleContactPanel,
        toggleProjectsPanel,
        setToggleProjectsPanel,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
