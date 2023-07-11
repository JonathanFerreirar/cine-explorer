import Image from "next/image";
import { naruto } from "../../public/Naruto.jpg";

export const CardMovies = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Image src="/Naruto.jpg" width={287} height={200} alt="Uzumaki Naruto" />

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <div className="flex align-items-center align-items-center">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>

          <p className="fs-6 text-muted">07-10-2023</p>
        </div>
        <a href="#" className="btn btn-primary mt-1">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
