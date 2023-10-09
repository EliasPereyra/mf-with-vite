import useValue from "./store";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useValue();

  return (
    <>
      <h1>Remote app</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
