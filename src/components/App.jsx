import React, { useState } from "react";

function App() {
  const [item, itemFunction] = useState("");
  const [listes, setList] = useState([]);

  function handleClick(event) {
    const itemName = event.target.value;
    itemFunction(itemName);
  }

  function buttonClick() {
    setList((prevItem) => [...prevItem, item]);
    itemFunction("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleClick} value={item} />
        <button onClick={buttonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listes.map((listItems) => (
            <li>{listItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
