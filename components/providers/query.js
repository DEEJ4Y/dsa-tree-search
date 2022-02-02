import { createContext, useContext, useState } from "react";

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
  const [state, setState] = useState({
    value: "",
  });

  const updateQuery = (newValue) => {
    setState(() => {
      return { ...state, value: newValue };
    });
  };

  return (
    <QueryContext.Provider value={{ ...state, updateQuery: updateQuery }}>
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;
