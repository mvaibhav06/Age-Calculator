import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const handleClick = () => {
    const [year, month, day] = input.split("-");
    let selectedDate = new Date(year, month - 1, day);
    let currentDate = new Date();

    let age = currentDate - selectedDate;

    if (isNaN(age)) {
      setText("Please enter your birthdate");
      setColor("red");
    } else if (age < 0) {
      setText("Enter a valid date");
      setColor("red");
    } else {
      let days = Math.floor(age / (1000 * 60 * 60 * 24));

      let years = Math.floor(days / 365);

      let months = Math.floor((days % 365) / 30);

      days = days % 30;

      let out = "Your age is ";

      if (years > 0) {
        out += `${years} years, `;
      }
      if (months > 0) {
        out += `${months} months, and `;
      }
      if (days > 0) {
        out += `${days} days.`;
      }

      setText(out);
      setColor("green");
    }
  };

  return (
    <div className="main">
      <div className="body text-center">
        <h1>Age Calculator</h1>
        <p>Enter Your Birthday:</p>
        <div className="input">
          <input
            type="date"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control"
          />
          <button onClick={handleClick} className="btn btn-secondary">
            Calculate Age
          </button>
        </div>
        <p className="my-2" style={{ color: `${color}` }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default App;
