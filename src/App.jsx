import { Listado } from "./componentes/Listado";
import { Detalles } from "./componentes/Detalles";
import { Inicio } from "./componentes/Inicio";
import { Tendencias } from "./componentes/Tendencias";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Nosotros } from "./componentes/Nosotros";

export function App() {
  const [dark,setdark] = useState(true);
  const [pagina,setpaginasig] = useState(1);
  const [buscarp,setBuscarp] = useState("");
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
  //función de búsqueda
  function buscar(buscarp) {
    setBuscarp(buscarp)   
  }
  return (
    <BrowserRouter>
      <Navbar  dark={dark} cambiarmodo={(dark)=>darklight(dark)} pagina={pagina} cambiarpagina={(pagina)=>cambiopag(pagina)}/>
      <Routes>
        <Route path="/" element={<Inicio dark={dark} cambiarmodo={(dark)=>darklight(dark)} pagina={pagina} cambiarpagina={(pagina)=>cambiopag(pagina)} />} />
        <Route path="/Listado" element={<Listado dark={dark} cambiarmodo={(dark)=>darklight(dark)} pagina={pagina} cambiarpagina={(pagina)=>cambiopag(pagina)} buscarp={buscarp} buscarpeli={(buscarp)=>buscar(buscarp)}/>}/>
        <Route path="/Listado/:idPelicula" element={<Detalles dark={dark} cambiarmodo={(dark)=>darklight(dark)} pagina={pagina} cambiarpagina={(pagina)=>cambiopag(pagina)} />} />
        <Route path="/Tendencias" element={<Tendencias dark={dark} cambiarmodo={(dark)=>darklight(dark)} pagina={pagina} cambiarpagina={(pagina)=>cambiopag(pagina)} />} />
        <Route path="/Nosotros" element={<Nosotros dark={dark} cambiarmodo={(dark)=>darklight(dark)} />}/>
      </Routes>
    </BrowserRouter>
  );
}
