//import style from "@/styles/global.module.css";

import { useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import { Loading } from "@/components/loading";
import { useContextFilm } from "@/hooks/hooks";
import { imgURL, imgURL_2 } from "@/api";

const MoveDetail = () => {
  const { film, getFilmByID, loading } = useContextFilm();
  const { query } = useRouter();

  useEffect(() => {
    getFilmByID(query.film);
  }, [query, getFilmByID]);

  if (!loading) {
    return <Loading />;
  }

  return (
    <div className="filmResponsivines">
      <div className="filmDivImg">
        <Image
          className="filmImg"
          src={imgURL_2 + film.backdrop_path || imgURL + film.backdrop_path}
          fill
          alt={film.title}
        />
      </div>
      <div className="filmText">
        <h3>{film.title}</h3>
        <p className="d-flex gap-1">
          01/18/2018 -{" "}
          {film.genres?.map((gen) => {
            return <span key={gen.id}>{gen.name} | </span>;
          })}
        </p>

        <h6>Overview</h6>
        <p>{film.overview}</p>
        <h6>Rank</h6>
        <p> {Number(film.vote_average).toFixed(2)}</p>

        <p style={{ fontSize: "14px" }}>
          <h6>Time</h6>
          <span>{film.runtime} min</span>
        </p>
      </div>
    </div>
  );
};

export default MoveDetail;
