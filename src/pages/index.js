import Head from "next/head";
import { CardMovies } from "@/components/cardMovies";
import style from "@/styles/home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main`}>
        <div className={style.cardContainer}>
          <CardMovies />
          <CardMovies />
          <CardMovies />
          <CardMovies />
          <CardMovies />
          <CardMovies />
          <CardMovies />
          <CardMovies />
        </div>
      </main>
    </>
  );
}
