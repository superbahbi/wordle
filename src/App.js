import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const data = [{ "id": 1, "word": "edgar" }]
    const randomSolution = data[Math.floor(Math.random() * data.length)]
    setSolution(randomSolution.word)
  }, [setSolution]);
  return (
    <div className="App">
      <h1>Uncledle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};
export default App;
