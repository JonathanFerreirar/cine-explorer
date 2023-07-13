import Image from "next/image";
import style from "@/styles/home.module.css";

import { useContext, useEffect } from "react";
import { filmContext } from "@/context/film-contexct";
import { api, options } from "@/api";

const MoveDetail = () => {
  const { idFilm, film, getFilmByID } = useContext(filmContext);

  // console.log(idFilm);
  // console.log(router.query.id);

  // const getSearch = async () => {
  //   try {
  //     const response = await api.get(
  //       `https://api.themoviedb.org/3/movie/${idFilm}`,
  //       options
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //     alert("Something went wrong. Please try again more late.");
  //   }
  // };

  useEffect(() => {
    getFilmByID();
  }, []);

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
