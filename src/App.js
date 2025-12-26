
import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    // Use backticks for template literal and inject the excuse variable
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => {
        setGeneratedExcuse(res.data[0].excuse);
      })
      .catch((error) => {
        console.error('Error fetching excuse:', error);
      });
  };
  

  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p> {generatedExcuse} </p>
    </div>
  );
}


export default App;
