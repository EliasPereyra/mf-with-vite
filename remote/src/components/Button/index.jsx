import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count => count++)}>Increment +1</button>
      <p>Count: {count}</p>
    </div>
  );
}
