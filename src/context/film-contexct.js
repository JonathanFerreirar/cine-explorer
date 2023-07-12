import { api } from "@/_api";
import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const filmContext = createContext();

export const ProviderFilm = ({ children }) => {
  const [idFilm, setIdFilm] = useState(0);
  const [data, setData] = useState([]);

  const getFilm = useCallback(async () => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRlYWNiYmM1YmY3YzkzYmI5MDZkMTlkZWY2NWI1YiIsInN1YiI6IjY0YWNhN2I1M2UyZWM4MDBjYmNmMjczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.maMoeOYRoxeMx3POTZo1zRDvS2KEFpb0a7rlK5EvaUM",
      },
    };
    try {
      const response = await api.get("/popular?language=en-US&page=1", options);

      setData(response.data.results);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again later", error);
    }
  }, []);
  const gotToId = (id) => {
    setIdFilm(id);
  };

  const valueShare = {
    getFilm,
    setIdFilm,
    idFilm,
    data,
  };

  return (
    <filmContext.Provider value={valueShare}>{children}</filmContext.Provider>
  );
};
