import Image from "next/image";
import style from "@/styles/home.module.css";

const MovelDetail = () => {
  return (
    <div
      className={`mt-5 d-flex gap-5 align-items-center align-items-center ${style.movelDetailsResponsivines}`}
      style={{ width: "100vw", height: "70vh" }}
    >
      <div
        style={{
          width: "60vw",
          height: "500px",
          position: "relative",
        }}
        className={`${style.movelDetailsResponsivinesDivImg}`}
      >
        <Image
          className={`${style.movelDetailsResponsivinesImg}`}
          src="/Naruto.jpg"
          fill
          alt="Uzumaki Naruto"
        />
      </div>
      <div className="" style={{ width: "100vw" }}>
        <h5 className="">Sobrenatural: A Última Chave (2018)</h5>
        <p>01/18/2018 - Terro</p>

        <p className={`${style.movelDetailsResponsivinesText}`}>
          A Doutora Elise Rainier é chamada para resolver o caso de uma
          assombração no Novo México, localizada justamente na casa em que ela
          passou a infância. Enquanto tenta resolver o caso do morador de sua
          antiga casa, ela será obrigada a confrontar vários fantasmas e
          demônios de sua infância, alguns literais. Ao lado de Specs e Tucker,
          Elise se depara com seu caso mais pessoal.
        </p>

        <p style={{ fontSize: "14px" }}>
          Time: <span>120 min</span>
        </p>
      </div>
    </div>
  );
};

export default MovelDetail;
