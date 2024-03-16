import estilos from "../css/Inicio.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Inicio({dark}) {
    const [movieList, setMovieList]= useState([])
    const getMovie = () => {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=f076f66e04aa391b44e7022553ca7009&page=1")
        .then((res) => res.json())
        .then((json) => setMovieList(json.results));
    };
    useEffect(() => {
      getMovie();
    }, []);

    const poster = movieList.map((pelicula) => pelicula.poster_path);

    const rutaminiatura = "https://image.tmdb.org/t/p/w500" + poster[0];
  return (
    <div className={estilos.contenedor}>
        <div className={dark ? `${estilos.izquierda} ${estilos.izquierdac}` : `${estilos.izquierda} ${estilos.izquierdao}`}>
            <img className={estilos.poster} src={rutaminiatura} alt=""/>
        </div>
        <div className={dark ? `${estilos.derecha} ${estilos.derechac}` : `${estilos.derecha} ${estilos.derechao}`}>
            <img className={estilos.logogrande} src="./Logo Grande.png" alt=""/>
            <p className={dark ? `${estilos.mensaje} ${estilos.mensajec}` : `${estilos.mensaje} ${estilos.mensajeo}`}>
                Tu guía personalizada para el mundo del cine, al alcance de tu mano
            </p>

            <Link to="/Listado" className={estilos.comienza}>¡COMIENZA YA!</Link>
            <div className={estilos.contenedorinfo}>
                <div className={dark ? `${estilos.info} ${estilos.infoc}` : `${estilos.info} ${estilos.infoo}`}>
                    <img className={estilos.imginfo} src="./nav0.png" alt="" />
                    <p className={estilos.mensajeinfo}>
                        Buscar información completa acerca de tus películas favoritas
                    </p>
                </div>
                <div className={dark ? `${estilos.info} ${estilos.infoc}` : `${estilos.info} ${estilos.infoo}`}>
                    <img className={estilos.imginfo} src="./nav1.png" alt="" />
                    <p className={estilos.mensajeinfo}>
                        Mantenerte actualizado con los últimos estrenos del cine
                    </p>
                </div>
                <div className={dark ? `${estilos.info} ${estilos.infoc}` : `${estilos.info} ${estilos.infoo}`}>
                    <img className={estilos.imginfo} src="./nav2.png" alt="" />
                    <p className={estilos.mensajeinfo}>
                        Informarte acerca de las películas más galardonadas
                    </p>
                </div>
                <div className={dark ? `${estilos.info} ${estilos.infoc}` : `${estilos.info} ${estilos.infoo}`}>
                    <img className={estilos.imginfo} src="./nav3.png" alt="" />
                    <p className={estilos.mensajeinfo}>
                        Encontrar la película que buscas con todos sus detalles
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}
