import Image from "next/image";
import style from "@/styles/home.module.css";

import { useContext, useEffect } from "react";
import { filmContext } from "@/context/film-contexct";
import { useRouter } from "next/router";

const MoveDetail = () => {
  const { film, getFilmByID, loading } = useContext(filmContext);
  const { query } = useRouter();

  useEffect(() => {
    getFilmByID(query.film);
  }, [query, getFilmByID]);

  if (!loading) {
    return (
      <div className={style.cardContainer}>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`d-flex gap-5 align-items-center align-items-center ${style.movelDetailsResponsivines}`}
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        style={{
          width: "60vw",
          height: "500px",
          position: "relative",
        }}
        className={`${style.movelDetailsResponsivinesDivImg}`}
      >
        <Image
          className={`${style.movelDetailsResponsivinesImg}`}
          src={"https://image.tmdb.org/t/p/w500/" + film.backdrop_path}
          fill
          alt={film.title}
        />
      </div>
      <div className={`${style.movelDetailsResponsivinesText}`}>
        <h5 className="">{film.title}</h5>
        <p className="d-flex gap-1">
          01/18/2018 -{" "}
          {film.genres?.map((gen) => {
            return <span key={gen.id}>{gen.name} | </span>;
          })}
        </p>

        <p>Rank: {Number(film.vote_average).toFixed(2)}</p>
        <p>{film.overview}</p>

        <p style={{ fontSize: "14px" }}>
          Time: <span>{film.runtime} min</span>
        </p>
      </div>
    </div>
  );
};

export default MoveDetail;

// https://api.themoviedb.org/3/movie/{id}

//447365
