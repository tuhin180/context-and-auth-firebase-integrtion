import React, { createContext } from "react";
export const authUserContext = createContext();
const Usercontext = ({ children }) => {
  const user = { email: "abc" };
  const authInfo = { user };

  return (
    <authUserContext.Provider value={authInfo}>
      {children}
    </authUserContext.Provider>
  );
};

export default Usercontext;
