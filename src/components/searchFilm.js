import { useState, useEffect, useContext } from "react";

import { api } from "@/api";
import { filmContext } from "@/context/film-contexct";

export const SearchFilm = () => {
  const { searchFilm, setSearchFilm, getSearch } = useContext(filmContext);

  // const options = {
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRlYWNiYmM1YmY3YzkzYmI5MDZkMTlkZWY2NWI1YiIsInN1YiI6IjY0YWNhN2I1M2UyZWM4MDBjYmNmMjczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.maMoeOYRoxeMx3POTZo1zRDvS2KEFpb0a7rlK5EvaUM",
  //   },
  // };
  // const getSearch = async () => {
  //   try {
  //     const response = await api.get(
  //       `search/movie?query=${searchFilm}`,
  //       options
  //     );
  //     console.log("This is the search", response.data.results);
  //     setData(response.data.results);
  //   } catch (error) {
  //     console.log("This is the error", error);
  //   }
  // };
  // console.log();

  const handleSubmit = (event) => {
    event.preventDefault();
    getSearch();
    setSearchFilm("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex"
      role="search"
      style={{ minWidth: "60vw" }}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        value={searchFilm}
        onChange={(event) => setSearchFilm(event.target.value)}
      />
      <button className="btn btn-outline border" type="submit">
        buscar
      </button>
    </form>
  );
};

//Query //https://api.themoviedb.org/3/search/movie?query=naruto&include_adult=false&language=en-US&page=1
