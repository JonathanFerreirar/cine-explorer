import style from "@/styles/global.module.css";

export const Loading = () => {
  return (
    <div className={style.cardContainer}>
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
