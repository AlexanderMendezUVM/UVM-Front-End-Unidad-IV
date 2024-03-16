import estilos from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import {useState} from "react";

export function Navbar({dark, cambiarmodo, pagina, cambiarpagina, buscarp, buscarpeli}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={dark ? `${estilos.navbar} ${estilos.navbarc}` : `${estilos.navbar} ${estilos.navbaro}`}>
        <button onClick={()=>cambiarmodo(dark)} className={estilos.logo}>
          {dark ?
            <img className={estilos.modopng} src="./Dark.png" alt=""/>
            :
            <img className={estilos.modopng} src="./Light.png" alt=""/>
          }
        </button>
        <Link to="/" className={estilos.logo}>
          <img className={estilos.logopng} src="./Logo.png" alt=""/>
          <h1 className={dark ? estilos.logotextc : estilos.logotexto} >Mermovies</h1>
        </Link>
        <button onClick={()=>cambiarpagina(--pagina)} className={estilos.logo}>
              <img className={estilos.modopng} src="./prev.png" alt=""/>
        </button>
        <button onClick={()=>cambiarpagina(++pagina)} className={estilos.logo}>
              <img className={estilos.modopng} src="./next.png" alt=""/>
        </button>
        <button onClick={()=> setIsOpen(!isOpen)} className={estilos.iconomenu}>
              <img className={estilos.modopng} src="./iconmenu.png" alt=""/>
        </button>

        <ul className={isOpen ? `${estilos.menu} ${estilos.menuabierto}` : `${estilos.menu} ${estilos.menucerrado}`} >
            <li onClick={()=> setIsOpen(!isOpen)}><Link className={dark ? `${estilos.item} ${estilos.itemo}` : `${estilos.item} ${estilos.itemc}`} to="/Listado">Listado</Link></li>
            <li onClick={()=> setIsOpen(!isOpen)}><Link className={dark ? `${estilos.item} ${estilos.itemo}` : `${estilos.item} ${estilos.itemc}`} to="/Tendencias">Tendencias</Link></li>
            <li onClick={()=> setIsOpen(!isOpen)}><Link className={dark ? `${estilos.item} ${estilos.itemo}` : `${estilos.item} ${estilos.itemc}`} to="/Nosotros">Sobre Nosotros</Link></li>
        </ul>
        <div className={estilos.contenedor2}>
            <img className={estilos.imgbuscar} src="./buscar.png" alt="" />
            <input value={buscarp} className={estilos.txtbuscar} type="text" placeholder="Buscar" />
        </div>
    </nav>
  )
}