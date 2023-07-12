import axios from "axios";
import { createContext, useState } from "react";

export const filmContext = createContext();

export const ProviderFilm = ({ children }) => {
  const nome = "Jonathan";

  const [idFilm, setIdFilm] = useState(0);

  const valueShare = {
    setIdFilm,
    idFilm,
  };

  return (
    <filmContext.Provider value={valueShare}>{children}</filmContext.Provider>
  );
};
