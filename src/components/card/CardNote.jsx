import React from "react";
import HeaderCardNote from "./HeaderCardNote";
import DescriptionCardNote from "./DescriptionCardNote";
import ListButtonAct from "./ListButtonAct";

function CardNote({ note, onRemove, onMoveFromArchived, onMoveToArchived }) {
  return (
    <div className="card-note">
      <HeaderCardNote title={note.title} createdAt={note.createdAt} />
      <DescriptionCardNote desc={note.body} />
      <ListButtonAct
        onRemove={onRemove}
        id={note.id}
        onMoveFromArchived={onMoveFromArchived}
        onMoveToArchived={onMoveToArchived}
        archived={note.archived}
      />
    </div>
  );
}

export default CardNote;
