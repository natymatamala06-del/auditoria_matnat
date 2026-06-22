import "./App.css";

import Activos from "./Activos";
import Comandos from "./Comandos";
import Controles from "./Controles";
import InyeccionSQL from "./InyeccionSQL";
import Matriz from "./Matriz";
import Prompts from "./Prompts";
import Recuperacion from "./Recuperacion";
import Xss from "./Xss";

function App() {
  return (
    <div className="app">
      <h1>Auditoría de Seguridad MatNat</h1>

      <section>
        <InyeccionSQL />
      </section>

      <section>
        <Xss />
      </section>

      <section>
        <Comandos />
      </section>

      <section>
        <Activos />
      </section>

      <section>
        <Matriz />
      </section>

      <section>
        <Controles />
      </section>

      <section>
        <Recuperacion />
      </section>

      <section>
        <Prompts />
      </section>
    </div>
  );
}

export default App;