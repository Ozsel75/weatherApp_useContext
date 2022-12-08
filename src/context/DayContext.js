import { createContext, useState } from "react";

const DayContext = createContext();

export const DayContextProvider = ({ children }) => {
  const [day, setDay] = useState();

  const values = { day, setDay };

  return <DayContext.Provider value={values}>{children}</DayContext.Provider>;
};

export default DayContext;