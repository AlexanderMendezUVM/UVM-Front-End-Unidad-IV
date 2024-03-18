import {useEffect, useState } from "react";
import { useDebounce } from "../utilidades/useDebounce";
import estilos from "../css/Listado.module.css";
import { Miniatura } from "./Miniatura";
export function Listado({dark, pagina}) {
  const [peliculas, setPeliculas]= useState([])
  const [buscarp,setBuscarp] = useState("");
  const debounceValue = useDebounce(buscarp, 200);

  const buscarPelicula = () => {
  if (buscarp.length>0){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${buscarp}&include_adult=false&language=es-ES&api_key=f076f66e04aa391b44e7022553ca7009&page=${pagina}`)
      .then((res) => res.json())
      .then((json) => setPeliculas(json.results));
  }else{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f076f66e04aa391b44e7022553ca7009&language=es-ES&page="+pagina)
      .then((res) => res.json())
      .then((json) => setPeliculas(json.results));
  }

  };
  useEffect(() => {
    buscarPelicula();
  }, [debounceValue, pagina]);

  const evaluarCambios = ({ target }) => {
    setBuscarp(target.value);
  };

  return (
    <>
    <div className={estilos.contenedor}>
            <img className={estilos.imgbuscar} src="./buscar.png" alt="" />
            <input type="text" value={buscarp} onChange={evaluarCambios} className={estilos.txtbuscar} placeholder="Buscar" />
    </div>
    <ul className={dark ? estilos.claro : estilos.oscuro}>
      {peliculas.map((pelicula) => (
        <Miniatura key={pelicula.id} dark={dark} pelicula={pelicula} />
      ))}
    </ul>
    </>
  );
}
