import "./App.css";
import { useState } from "react";

import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Activos from "./components/Activos";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Recuperacion from "./components/Recuperacion";
import Prompts from "./components/Prompts";

export default function App() {
  const [vista, setVista] = useState("resumen");

  const renderVista = () => {
    switch (vista) {
      case "resumen":
        return <Resumen />;
      case "sql":
        return <InyeccionSQL />;
      case "xss":
        return <XSS />;
      case "comandos":
        return <Comandos />;
      case "activos":
        return <Activos />;
      case "matriz":
        return <Matriz />;
      case "controles":
        return <Controles />;
      case "recuperacion":
        return <Recuperacion />;
      case "prompts":
        return <Prompts />;
      default:
        return <Resumen />;
    }
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>MENÚ PRINCIPAL</h2>

        <button onClick={() => setVista("resumen")}> Resumen</button>
        <button onClick={() => setVista("sql")}> Inyección SQL</button>
        <button onClick={() => setVista("xss")}> XSS</button>
        <button onClick={() => setVista("comandos")}> Comandos</button>
        <button onClick={() => setVista("activos")}> Activos</button>
        <button onClick={() => setVista("matriz")}> Matriz de Riesgo</button>
        <button onClick={() => setVista("controles")}> Controles</button>
        <button onClick={() => setVista("recuperacion")}> Recuperación</button>
        <button onClick={() => setVista("prompts")}> Prompts</button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="content">
        <div className="card">
          <h1>Panel de control de Seguridad de la Información</h1>
          {renderVista()}
        </div>
      </main>
    </div>
  );
}