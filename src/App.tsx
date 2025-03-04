import React, { useState } from "react";
import "./global.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button>Click Me!!!</Button>
    </div>
  );
}

export default App;
