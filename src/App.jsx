import ListaSimples from "./components/listaSimples";
import ListaMap from "./components/listaMap";
import ListaFilter from "./components/listaFilter";
import ListaFrutas from "./components/listaFrutas";
import ListaAlunos from "./components/listaAlunos";

function App() {


  return (
    <>
      <ListaSimples titulo = 'En apprenant des listes dans le React'/>
      <ListaMap/>
      <ListaFilter/>
      <ListaFrutas/>
      <ListaAlunos/>
    </>
  )
}

export default App