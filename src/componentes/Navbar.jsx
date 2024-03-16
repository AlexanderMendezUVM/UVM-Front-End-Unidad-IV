import estilos from "../css/Navbar.module.css";

export function Navbar() {
  return (
    <nav className={estilos.navbar} >
        <button  className={estilos.logo}>
            <img className={estilos.modopng} src="./Dark.png" alt=""/>
        </button>
        <div className={estilos.contenedorlogo}>
          <img className={estilos.logopng} src="./Logo.png" alt=""/>
          <h1 className={estilos.logotext}>Mermovies</h1>
        </div>
        <button className={estilos.iconomenu}>
              <img className={estilos.modopng} src="./iconmenu.png" alt=""/>
        </button>
        <ul className={estilos.menu} >
            <li className={estilos.item}>Listado</li>
            <li className={estilos.item}>Tendencias</li>
            <li className={estilos.item}>Sobre Nosotros</li>
        </ul>
    </nav>
  )
}
