import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRlYWNiYmM1YmY3YzkzYmI5MDZkMTlkZWY2NWI1YiIsInN1YiI6IjY0YWNhN2I1M2UyZWM4MDBjYmNmMjczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.maMoeOYRoxeMx3POTZo1zRDvS2KEFpb0a7rlK5EvaUM",
  },
};
