import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [value, setvalue] = useState("");

  function handleChange(event) {
    const nameN = event.target.value;
    setName(nameN);
  }

  function handleClick(event) {
    setvalue(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {value} </h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
