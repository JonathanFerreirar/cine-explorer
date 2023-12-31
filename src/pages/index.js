import { useEffect } from "react";
import { GiFilmProjector } from "react-icons/gi";

import Head from "next/head";

import { CardFilm } from "@/components/cardFilm";
import { Loading } from "@/components/loading";
import { useContextFilm } from "@/hooks/hooks";
import { imgURL } from "@/api";

export default function Home() {
  const { data, getFilm, loading, title } = useContextFilm();
  useEffect(() => {
    getFilm();
  }, [getFilm]);

  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Cine Explore</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={`main`}>
        <h1
          className="mt-4 text-center d-flex justify-content-center align-items-center gap-3 "
          style={{ fontWeight: "400" }}
        >
          <i>{title}</i> <GiFilmProjector />{" "}
        </h1>
        <div className="cardContainer">
          {data?.map((film) => {
            return (
              <div key={film.id}>
                <CardFilm
                  filmImg={
                    imgURL + film.poster_path || imgURL + film.backdrop_path
                  }
                  filmName={film.title}
                  filmDate={film.release_date}
                  filmRate={film.vote_average}
                  id={film.id}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
