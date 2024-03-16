import { Listado } from "./componentes/Listado";
import { Inicio } from "./componentes/Inicio";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nosotros from "./componentes/Nosotros";
import Tendencias from "./componentes/Tendencias";

export function App() {
  const [dark,setdark] = useState(true);
  const [pagina,setpaginasig] = useState(1);
  function darklight(dark){
    setdark(!dark);
  }
  function cambiopag(pagina){
    if (pagina<1){
      setpaginasig(pagina=500)
    }
    else if (pagina>500) {
      setpaginasig(pagina=1)
    }
    else
    {
      setpaginasig(pagina)
    }
  }

  return (
    <BrowserRouter>
      <Navbar  dark={dark} cambiarmodo={(dark)=>darklight(dark)} pagina={pagina} cambiarpagina={(pagina)=>cambiopag(pagina)}/>
      <Routes>
        <Route path="/" element={<Inicio dark={dark} cambiarmodo={(dark)=>darklight(dark)} pagina={pagina} cambiarpagina={(pagina)=>cambiopag(pagina)} />} />
        <Route path="/Listado" element={<Listado />}/>
        <Route path="/Tendencias" element={<Tendencias />}/>
        <Route path="/Nosotros" element={<Nosotros />}/>
      </Routes>
    </BrowserRouter>
  );
}
