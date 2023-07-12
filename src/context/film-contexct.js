import { createContext } from "react";

const filmContext = createContext();

export const FilmContexct = ({ children }) => {
  return <div>{children}</div>;
};
