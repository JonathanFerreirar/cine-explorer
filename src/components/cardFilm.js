import Image from "next/image";

import { useRouter } from "next/router";

export const CardFilm = ({ filmName, filmDate, filmRate, filmImg, id }) => {
  const { push } = useRouter();
  return (
    <button
      className="buttonCardItem"
      style={{
        border: "none",
        width: "100%",
        background: "none",
        transitionDuration: "0.3s",
        borderRadius: "20px",
      }}
      onClick={() => push(`/filmdetail/${id}`)}
    >
      <div
        className="card buttonCardDiv"
        style={{
          width: "15rem",
          height: "400px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "270px",
            borderRadius: "30px",
          }}
        >
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "20px 20px 5px 5px",
            }}
            src={filmImg}
            fill
            alt={filmName}
          />
        </div>

        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5
            className="card-title"
            style={{ fontSize: "15px", fontWeight: "800" }}
          >
            {filmName.length >= 20
              ? filmName.slice(0, 20) + "..."
              : filmName.slice(0, 20)}
          </h5>
          <div className="flex align-items-center align-items-center">
            <p
              className="card-text"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              Released: {filmDate}
            </p>

            <p
              className="text-muted"
              style={{ fontSize: "11px", fontWeight: "500" }}
            >
              Classification: {filmRate}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};
