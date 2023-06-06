import './App.css';
import Mandala from "./assets/imagem-2.png"

function App() {
  return (
    <>
    <div className ="App">
      <h1>Avançando em React</h1>
      { /* Imagem em public */ }
      <h1>
        <img src="/imagem-1.png" alt="paisagem" />
      </h1>

  {/* Imagem em assets */}
    <img src={Mandala} alt="mandala" />
    </div>
    </>
  );
}

export default App;
