import {useEffect, useState } from "react";
import estilos from "../css/Listado.module.css";
export function Listado({dark}) {
  const [peliculas, setPeliculas]= useState([])

 const buscarPelicula = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f076f66e04aa391b44e7022553ca7009&language=es-ES&page=1")
      .then((res) => res.json())
      .then((json) => setPeliculas(json.results));
  };
  useEffect(() => {
    buscarPelicula();
  }, []);

  return (
    <>
    <ul className={dark ? estilos.claro : estilos.oscuro}>
        {peliculas.map((pelicula) => (
            <li>
                <div className={estilos.listar} key={pelicula.id}> {pelicula.title}</div>
            </li>
        ))}
    </ul>
    </>
  );
}