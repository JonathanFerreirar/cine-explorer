import Image from "next/image";
import style from "@/styles/home.module.css";

import Link from "next/link";

export const CardFilm = ({ filmName, filmDate, filmRate, filmImg, id }) => {
  return (
    <Link
      className={`buttonCardItem ${style.buttonCardItem}`}
      style={{
        border: "none",
        width: "15rem",
        background: "none",
        transitionDuration: "0.3s",
      }}
      href={`/filmdetail/${id}`}
    >
      <div className="card" style={{ width: "15rem", height: "400px" }}>
        <div style={{ position: "relative", width: "15rem", height: "300px" }}>
          <Image
            style={{ objectFit: "cover" }}
            src={filmImg}
            fill
            alt={filmName}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "16px" }}>
            {filmName}
          </h5>
          <div className="flex align-items-center align-items-center">
            <p className="card-text" style={{ fontSize: "14px" }}>
              Released: {filmDate}
            </p>

            <p className="text-muted" style={{ fontSize: "11px" }}>
              Classification: {filmRate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
