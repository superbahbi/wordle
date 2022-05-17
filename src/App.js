import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import data from "./data/db.json";

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const json = data.solutions
    const randomSolution = json[Math.floor(Math.random() * json.length)]
    setSolution(randomSolution.word)
  }, [setSolution]);
  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}
export default App;
