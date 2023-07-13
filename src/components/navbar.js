import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { SearchFilm } from "./searchFilm";
import { filmContext } from "@/context/film-contexct";

export const Navbar = () => {
  const { getFilm } = useContext(filmContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Link className="navbar-brand" href="/" onClick={getFilm}>
          <div className="d-flex align-items-center align-items-center">
            <Image
              src="/Logo.png"
              width={50}
              height={50}
              alt="logo Cine Explorere "
            />
            <p className="m-1" style={{ fontSize: "16px", fontWeight: "600" }}>
              Cine Explore
            </p>
          </div>
        </Link>

        <div style={{ margin: "0 auto" }}>
          <SearchFilm />
        </div>
      </div>
    </nav>
  );
};
