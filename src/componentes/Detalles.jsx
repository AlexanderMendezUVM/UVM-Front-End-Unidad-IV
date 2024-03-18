import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import estilos from "../css/Detalles.module.css";
export function Detalles({dark}) {
  const {idPelicula} = useParams();
  const [movieList, setMovieList]= useState([]);
  const [videos, setVideos]= useState([]);
  const [show, setShow] = useState(false);
  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=f076f66e04aa391b44e7022553ca7009&language=es-ES`)
      .then((res) => res.json())
      .then((json) => setMovieList(json));
  };
  const buscartrailer = () => {
    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}/videos?api_key=f076f66e04aa391b44e7022553ca7009&language=es-ES`)
      .then((res2) => res2.json())
      .then((json2) => setVideos(json2.results));
  };

  useEffect(() => {
    getMovie();
    buscartrailer();
  }, []);

  const poster = movieList.poster_path;
  const titulo = movieList.title;
  const resumen = movieList.overview;
  
  const rutaminiatura = "https://image.tmdb.org/t/p/w1280" + poster;
  //const rutaminiatura = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
  return (
    <div className={dark ? estilos.contenedorc : estilos.contenedoro}>
        <div className={estilos.contenedorposter}>
            <img style={{width:"350px", height:"auto"}} className={estilos.poster} src={rutaminiatura} alt=""/>
            <button className={dark ? estilos.botontrailerc : estilos.botontrailero} type="button" onClick={() => {setShow(!show);}}>
              Ver/Ocultar Video
            </button>
            <div className={show ? estilos.mostrarvideo: estilos.ocultarvideo}>
              <YouTube videoId={videos[0]?.key}/>
            </div>
        </div>
        <div className={dark ? estilos.contenedorinfoc : estilos.contenedorinfoo}>
          <h1 className={estilos.titulo}>{titulo}</h1>
          <hr />
          <h3>Fecha de Lanzamiento: {movieList.release_date?.split("-").reverse().join("-")}</h3>
          <h3>Generos</h3>
          <ul className={estilos.generos}>
            {movieList.genres?.map((genero) => (
            <li className={estilos.generos}>
              {genero.name}
            </li>
            ))}
          </ul>
          <h4>Descripcion General</h4>
          <p>{resumen}</p>
        </div>
    </div>
  );
}
