import { useContext } from "react";
import { filmContext } from "@/context/film-contexct";

export const useContextFilm = () => useContext(filmContext);
