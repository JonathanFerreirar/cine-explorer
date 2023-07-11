import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { Navbar } from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

/*
 título do filme, a data de lançamento e a classificação.
 */
