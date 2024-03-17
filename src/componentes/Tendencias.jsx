import estilos from "../css/Tendencias.module.css";
import { useEffect, useState } from "react";
export function Tendencias({dark}) {
  const rutaminiatura = "https://image.tmdb.org/t/p/w500";
  const [movieList1, setMovieList1] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f076f66e04aa391b44e7022553ca7009&language=es-ES"
    )
      .then((res) => res.json())
      .then((json) => setMovieList1(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <div className={dark ? estilos.slideroscuro : estilos.sliderclaro}>
        <div className={estilos.slidetrack}>
          {movieList1.map((pelicula1) => (
            <div className={estilos.slide}>
              <img
                style={{ width: "350px", height: "480px" }}
                className={estilos.imgSlider}
                src={rutaminiatura + pelicula1.poster_path}
                alt=""
              />
            </div>
          ))}
          {movieList1.map((pelicula1) => (
            <div className={estilos.slide}>
              <img
                style={{ width: "350px", height: "480px" }}
                className={estilos.imgSlider}
                src={rutaminiatura + pelicula1.poster_path}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}