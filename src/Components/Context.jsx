import React, {createContext, useState,} from "react";
import Consumer from "./Consumer";

export const MyContext = createContext();

function Context() {
  const [value, setValue] = useState("Hello World");
  return (
    <MyContext.Provider value={[value, setValue]}>
      <Consumer />
    </MyContext.Provider>
  );
}

export default Context


