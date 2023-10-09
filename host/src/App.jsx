import { useState } from "react";

import { Button } from "remoteApp/components/Button"
import useValue from "remoteApp/store"
import "./App.css";

function App() {
  const [count, setCount] = useValue();

  return (
    <>
      <div>
        <h1>Host app</h1>
        <Button />
      </div>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
