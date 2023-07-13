import { useContext } from "react";

import { filmContext } from "@/context/film-contexct";

export const SearchFilm = () => {
  const { searchFilm, setSearchFilm, getSearch } = useContext(filmContext);

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
