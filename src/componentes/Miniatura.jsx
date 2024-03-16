import estilos from "../css/Miniatura.module.css";
import { Link } from "react-router-dom";
export function Miniatura({dark, pelicula}) {
  let rutaminiatura="./sinposter.png";
  if (pelicula.poster_path != null){
    rutaminiatura = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;   
  }else{
    rutaminiatura = "./sinposter.png";
  }
  return (
    <li className={estilos.miniatura}>
      <Link to={"/Listado/"+pelicula.id} className={dark ? estilos.tituloo : estilos.tituloc}>
        <img style={{width:"230px", height:"345px"}}
        className={dark ? estilos.imgoscuro : estilos.imgclaro}
        src={rutaminiatura} alt={pelicula.title}
      />
      <div className={dark ? estilos.tituloo : estilos.tituloc}>
        {pelicula.title}
      </div>
      </Link>
    </li>
  );
}
