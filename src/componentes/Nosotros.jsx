import estilos from "../css/Nosotros.module.css";

export function Nosotros({dark}) {
  return (
    <div className={dark ? estilos.contenedorc : estilos.contenedoro}>
        <div className={dark ? estilos.cuerpoc : estilos.cuerpoo}>
            <img className={estilos.logogrande} src="./Logo Grande.png" alt=""/>
            <h2 className={dark ? estilos.equipoc : estilos.equipoo}>
                NUESTRO EQUIPO
            </h2>
            <h3 className={dark ? estilos.equipoc : estilos.equipoo}>
              Estudiantes de Ingeniería en Computacion del 5to Trimestre UVM
            </h3>
            <div className={dark ? estilos.integrantesc : estilos.integranteso}>
              <div className={estilos.infointegrantes}>
                <h3>Alexander Mendez</h3>
              </div>
              <div className={estilos.infointegrantes}>
                <h3>Aaron Rosales</h3>
              </div>
              <div className={estilos.infointegrantes}>
                <h3>Jesus Delgado</h3>
              </div>
              <div className={estilos.infointegrantes}>
                <h3>Jose Barrios</h3>
              </div>
            </div>
            <p className={dark ? estilos.textoc : estilos.textoo}>
              En nuestra aplicación de búsqueda de películas, somos un equipo apasionado de cinéfilos dedicados a ofrecerte una experiencia cinematográfica enriquecedora. Con una base de datos extensa y actualizada, te brindamos acceso a una amplia variedad de películas, desde clásicos hasta los últimos estrenos. Nuestra plataforma intuitiva te permite explorar géneros, directores y actores para encontrar la película perfecta para ti. Únete a nuestra comunidad cinéfila y descubre nuevas joyas del cine con recomendaciones personalizadas que se adaptan a tus gustos y preferencias. ¡Bienvenido a un mundo de emocionantes aventuras cinematográficas!
            </p>
            
            <p className={dark ? estilos.textoc : estilos.textoo}> 
              En nuestra app, te acompañaremos en un viaje fascinante a través del mundo del cine, donde cada película es una oportunidad para emocionarte y reflexionar. Nuestro equipo diverso y entusiasta está comprometido en ser tu guía confiable en la búsqueda de tu próxima película favorita. Explora la magia de la gran pantalla con nosotros y sumérgete en historias que cobran vida de formas sorprendentes. ¡Descubre la belleza y diversidad del arte cinematográfico en nuestra comunidad cinéfila!
            </p>
        </div>
    </div>
  )
}
