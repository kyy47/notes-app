import React from "react";
import { convertDate } from "../helper/time-converter";
function HeaderCardNote({ title, createdAt }) {
  const date = convertDate(createdAt);
  return (
    <div className="header-card-note">
      <h2 className="title-note">{title}</h2>
      <p className="date-note">{date}</p>
    </div>
  );
}

export default HeaderCardNote;
