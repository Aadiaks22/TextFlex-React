import React, { useState } from "react";

function Textform(props) {
  const countWords = (text) => {
    text = text.trim(); // Remove leading and trailing whitespace
    if (text === "") {
      return 0; // If the text is empty, return 0 words
    }
    // Split the text by one or more whitespace characters
    let words = text.split(/\s+/);
    return words.length;
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const [text, setText] = useState("");

  return (
    <div>
      <div className="mb-3 my-3" style={{ textAlign: "center", color: props.borderColor }}>
        <label htmlFor="mybox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className={`form-control my-3 border border-${props.borderColor} bg-${props.Mode}`}
          id="mybox"
          rows="5"
          value={text}
          onChange={handleOnChange}
          style={{ width: "80%", marginLeft: "auto", marginRight: "auto", color: props.borderColor }}
        ></textarea>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="p-1">
            <button
              type="button"
              className={`btn btn-${props.btnColor}`}
              onClick={handleUpClick}
            >
              Convert To UpperCase
            </button>
          </div>
          <div className="p-1">
            <button
              type="button"
              className={`btn btn-${props.btnColor}`}
              onClick={handleLoClick}
            >
              Convert To LowerCase
            </button>
          </div>
          <div className="p-1">
            <button
              type="button"
              className={`btn btn-${props.btnColor}`}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="container my-2" style={{ textAlign: "center", color: props.borderColor }}>
        <h4>Your Text Summary</h4>
        <p>
          {countWords(text)} : Words {text.length} : Characters
        </p>
        <p>{0.008 * countWords(text)} : Minutes to Read</p>
        <h3>Preview Text</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Textform;
