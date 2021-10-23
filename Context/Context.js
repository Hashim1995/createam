import React, { useState, createContext, useLayoutEffect } from "react";

export const GeneralData = createContext();

const ContextProvider = (props) => {
  const [screenIsXS, setScreenIsXS] = useState(false);
  useLayoutEffect(() => {
    if (window.innerWidth < 576) setScreenIsXS(true);
    else {
      setScreenIsXS(false);
    }
  });
  const generalData = { screenIsXS: screenIsXS };

  return (
    <GeneralData.Provider value={generalData}>
      {props.children}
    </GeneralData.Provider>
  );
};

export default ContextProvider;
