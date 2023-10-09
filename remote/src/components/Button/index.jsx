import useValue from "../../store"
import "./styles.css"

export function Button() {
  const [count, setCount] = useValue();

  return (
    <div>
      <button className="count-button" onClick={() => setCount(count => count + 1)}>Increment +1</button>
      <p>Count: {count}</p>
    </div>
  );
}
