import React from "react";

function TextAreaNote({ descNote, onChangeDesc }) {
  return (
    <div className="coolinput">
      <label htmlFor="input" className="text">
        Description
      </label>
      <textarea
        placeholder="Description here..."
        name="input"
        className="input desc"
        value={descNote}
        onChange={(e) => onChangeDesc(e)}
      />
    </div>
  );
}

export default TextAreaNote;
