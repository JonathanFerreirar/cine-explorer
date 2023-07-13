import { api, options } from "@/api";
import { createContext, useCallback, useState } from "react";

import { useRouter } from "next/navigation";

export const filmContext = createContext();

export const ProviderFilm = ({ children }) => {
  const [idFilm, setIdFilm] = useState(0); //Present on cartFilm component
  const router = useRouter();

  const [searchFilm, setSearchFilm] = useState("");

  //Run when you init the aplication or when you click in logo on the Navbar component

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  const getFilm = useCallback(async () => {
    try {
      if (!searchFilm) {
        setTitle("POPULARES");
        setLoading(false);
        const response = await api.get(
          "movie/popular?language=en-US&page=1",
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

  const [film, setFilm] = useState([]);

  const getFilmByID = useCallback(async () => {
    try {
      const response = await api.get(
        `https://api.themoviedb.org/3/movie/${idFilm}`,
        options
      );
      setFilm(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again more late.");
    }
  }, [idFilm]);

  const valueShare = {
    idFilm,
    data,
    loading,
    title,
    searchFilm,
    film,
    getFilm,
    getSearch,
    setIdFilm,
    setSearchFilm,
    setData,
    getFilmByID,
  };

  return (
    <filmContext.Provider value={valueShare}>{children}</filmContext.Provider>
  );
};
