import React from "react";

function InputNote({ titleNote, onChangeTitle, restTitle, onChangekey }) {
  return (
    <div className="coolinput">
      <label htmlFor="input" className="text">
        Title
      </label>
      <input
        type="text"
        placeholder="Title here..."
        name="input"
        className="input"
        value={titleNote}
        onChange={(e) => onChangeTitle(e)}
        onKeyDown={(e) => onChangekey(e)}
      />
      <p className="rest-character">
        <span>rest character : </span>
        <span className={`${restTitle === 0 ? "color-red" : "color-teal"}`}>
          {restTitle}
        </span>
      </p>
    </div>
  );
}

export default InputNote;
