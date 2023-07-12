import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { Navbar } from "@/components/navbar";
import { ProviderFilm } from "@/context/film-contexct";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderFilm>
        <Navbar />
        <Component {...pageProps} />
      </ProviderFilm>
    </>
  );
}

/*
 título do filme, a data de lançamento e a classificação.
 */
