import { useContext } from "react";
import { useRouter } from "next/router";

import { filmContext } from "@/context/film-contexct";

import { FaSistrix } from "react-icons/fa";

export const SearchFilm = () => {
  const { searchFilm, setSearchFilm, getSearch } = useContext(filmContext);
  const { push, pathname } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pathname == `/filmdetail/[film]`) {
      //If user in this path, i need back to home, after send a seacrh request
      push("/");

      setTimeout(() => {
        getSearch();
        setSearchFilm("");
      }, 300);
    } else {
      getSearch();
      setSearchFilm("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex"
      role="search"
      style={{ minWidth: "60vw" }}
    >
      <input
        className="form-control me-2 text-center"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchFilm}
        onChange={(event) => setSearchFilm(event.target.value)}
      />
      <button className="btn btn-outline border" type="submit">
        <div
          className="d-flex justify-content-center align-items-center gap-2 "
          style={{ fontSize: "13px", fontWeight: "300" }}
        >
          Search
          <FaSistrix />
        </div>
      </button>
    </form>
  );
};
