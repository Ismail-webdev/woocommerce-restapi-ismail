import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl text-center font-bold p-4">Hello</h1>
      <div className="px-3">
        <Cards />
      </div>
    </>
  );
}

export default App;
