import Image from "next/image";
import React from "react";

import { SearchMovie } from "./SearchMovie";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a className="navbar-brand" href="#">
          <div className="d-flex align-items-center align-items-center">
            <Image
              src="/Logo.png"
              width={50}
              height={50}
              alt="logo Cine Explorere "
            />
            <p className="m-1">Cine Explore</p>
          </div>
        </a>

        <div style={{ margin: "0 auto" }}>
          <SearchMovie />
        </div>
      </div>
    </nav>
  );
};
