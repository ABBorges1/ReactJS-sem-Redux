import React, {useState} from "react";
import "./App.css";
import Soma from "./components/Soma";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";
import Intervalo from "./components/Intervalo";

function App() {
  
  const [min, setMin] = useState(0);   
  const [max, setMax] = useState(50);   

  return (
    <div className="App">
      <h1>Projeto Redux</h1>
      <div className="linha">
        <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}/>
      </div>
      <div className="linha">
        <Soma min={min} max={max} />
        <Media min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
