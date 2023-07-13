import { createContext, useCallback, useState } from "react";

import { api, options } from "@/api";

export const filmContext = createContext();

export const ProviderFilm = ({ children }) => {
  const [searchFilm, setSearchFilm] = useState("");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  //Run when you init the aplication or when you click in logo on the Navbar component
  const getFilm = useCallback(async () => {
    try {
      if (!searchFilm) {
        setTitle("POPULAR");
        setLoading(false);
        const response = await api.get(
          "movie/popular?language=en-US&page=2",
          options
        );

        setData(response.data.results);
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again more later", error);
    }
  }, []);

  //Just run when you submit your search in Navbar component
  const getSearch = useCallback(async () => {
    try {
      if (!searchFilm) {
        //Check if user type something in searchFilm
        getFilm();
      } else {
        setLoading(false);
        const response = await api.get(
          `search/movie?query=${searchFilm}`,
          options
        );
        setLoading(true);

        if (response.data.results.length) {
          //Only change te tittle and the moveis if it found a result for this search
          setData(response.data.results);
          setTitle(searchFilm);
        } else {
          throw new error();
        }

        setLoading(true);
      }
    } catch (error) {
      console.log(error);
      alert("Sorry we don't find this film in our data base");
    }
  }, [searchFilm]);

  const [film, setFilm] = useState([]);

  //Just run when you click in a cardFilm component
  const getFilmByID = useCallback(async (filmID) => {
    try {
      setLoading(false);
      const response = await api.get(
        `https://api.themoviedb.org/3/movie/${filmID}`,
        options
      );
      setFilm(response.data);
      setLoading(true);
      console.log(response.data);
    } catch (error) {
      if (filmID) {
        console.log(error);
        alert("Something went wrong. Please try again more late.");
      }
    }
  }, []);

  const valueShare = {
    data,
    loading,
    title,
    searchFilm,
    film,
    getFilm,
    getSearch,
    setSearchFilm,
    setData,
    getFilmByID,
  };

  return (
    <filmContext.Provider value={valueShare}>{children}</filmContext.Provider>
  );
};
