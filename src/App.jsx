import InyeccionSQL from "./inyeccionSQL";
import Xss from "./xss";
import Comandos from "./comandos";
import Activos from "./activos";
import Matriz from "./matriz";
import Controles from "./controles";
import Recuperacion from "./recuperacion";
import Prompts from "./prompts";

function App() {
  return (
    <div>
      <h1>Auditoría de Seguridad MatNat</h1>

      <InyeccionSQL />
      <hr />

      <Xss />
      <hr />

      <Comandos />
      <hr />

      <Activos />
      <hr />

      <Matriz />
      <hr />

      <Controles />
      <hr />

      <Recuperacion />
      <hr />

      <Prompts />
    </div>
  );
}

export default App;