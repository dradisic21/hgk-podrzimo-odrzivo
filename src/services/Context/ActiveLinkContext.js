import React, { createContext, useState, useContext } from 'react';


const ActiveLinkContext = createContext();


export function useActiveLink() {
  return useContext(ActiveLinkContext);
}

export function ActiveLinkProvider({ children }) {
  const [activeLink, setActiveLink] = useState('/'); 

  const setActiveLinkHandler = (path) => {
    setActiveLink(path);
  };


  const value = {
    activeLink,
    setActiveLink: setActiveLinkHandler,
  };

  return (
    <ActiveLinkContext.Provider value={value}>
      {children}
    </ActiveLinkContext.Provider>
  );
}
