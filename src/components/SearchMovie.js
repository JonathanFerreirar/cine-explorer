import React from "react";

export const SearchMovie = () => {
  return (
    <form className="d-flex" role="search" style={{ minWidth: "60vw" }}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
      />
      <button className="btn btn-outline border" type="submit">
        buscar
      </button>
    </form>
  );
};
