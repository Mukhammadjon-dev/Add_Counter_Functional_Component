import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState([]);
  function addCount() {
    count.push(0);
    setCount([...count]);
  }
  function increase(index) {
    count[index] = count[index] + 1;
    setCount([...count]);
  }
  function decrease(index) {
    count[index] = count[index] - 1;
    setCount([...count]);
  }
  return (
    <div className="container w-50 mt-3">
      <button className="btn btn-info" onClick={addCount}>
        {" "}
        Add Counter{" "}
      </button>
      <hr />
      <div>
        {count.map((item, index) => (
          <div className="d-flex">
            <button
              className="btn btn-danger col-1 m-1"
              onClick={() => decrease(index)}
            >
              {" "}
              -{" "}
            </button>
            <h1>{item}</h1>
            <button
              className="btn btn-success col-1  m-1"
              onClick={() => increase(index)}
            >
              {" "}
              +{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
