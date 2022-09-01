import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    // this prevents some unwanted behavior in the page
    e.preventDefault();
    // this will change the number into an integer
    let amount = parseInt(count);
    //I want the user to choose how much text they want so I'm going to use slice on the array to get the amount of text they want
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>
        Don't know about you but I want something different to Lorem ipsum as
        Dummy text so I made this text generator
      </h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        {/*here a number will be passed and the amount of text will be generated. I also set the count to be = to my state value and as I'm changing the value I'm also changing the count*/}
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          // this is a function that will be called when the value of the input is changed
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ex.
        </p>
      </article>
    </section>
  );
}

export default App;
