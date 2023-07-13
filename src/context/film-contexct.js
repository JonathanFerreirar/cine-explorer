import { api, options } from "@/api";
import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const filmContext = createContext();

export const ProviderFilm = ({ children }) => {
  const [idFilm, setIdFilm] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");

  const [title, setTitle] = useState("");

  const getFilm = useCallback(async () => {
    try {
      setTitle("POPULARES");
      setLoading(false);
      const response = await api.get(
        "movie/popular?language=en-US&page=1",
        options
      );

      setData(response.data.results);
      setLoading(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again more later", error);
    }
  }, []);

  const getSearch = useCallback(async () => {
    try {
      setLoading(false);
      const response = await api.get(
        `search/movie?query=${searchFilm}`,
        options
      );
      setLoading(true);

      if (response.data.results.length) {
        setData(response.data.results);
        setTitle(searchFilm);
      } else {
        alert("Sorry we don't find this film in our data base");
      }
      setLoading(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again more late.");
    }
  }, [searchFilm]);

  const gotToId = (id) => {
    setIdFilm(id);
  };

  const valueShare = {
    idFilm,
    data,
    loading,
    title,
    searchFilm,
    getFilm,
    getSearch,
    setIdFilm,
    setSearchFilm,
    setData,
  };

  return (
    <filmContext.Provider value={valueShare}>{children}</filmContext.Provider>
  );
};
