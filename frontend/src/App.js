import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PruebaFacilComponent from './Components/PruebaFacilComponent';
import PruebaMedioComponent from './Components/PruebaMedioComponent';
import PruebaDificilComponent from './Components/PruebaDificilComponent';
import HomeComponent from './Components/HomeComponent';
import ResultadosComponent from './Components/ResultadosComponent';
import IngresarPreguntaComponent from './Components/IngresarPreguntaComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/prueba-facil" element={<PruebaFacilComponent />} />
          <Route path="/prueba-medio" element={<PruebaMedioComponent />} />
          <Route path="/prueba-dificil" element={<PruebaDificilComponent />} />
          <Route path="/resultados" element={<ResultadosComponent/>} />
          <Route path="/ingresar" element={<IngresarPreguntaComponent/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
