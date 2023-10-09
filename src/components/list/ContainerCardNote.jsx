import React from "react";
import CardNote from "../card/CardNote";

function ContainerCardNote({
  notes,
  onRemove,
  onMoveFromArchived,
  onMoveToArchived,
}) {
  return (
    <div className="container-card">
      {!notes.length ? (
        <p className="is-empty">notes is empty</p>
      ) : (
        notes.map((note) => (
          <CardNote
            key={note.id}
            note={note}
            onRemove={onRemove}
            onMoveFromArchived={onMoveFromArchived}
            onMoveToArchived={onMoveToArchived}
          />
        ))
      )}
    </div>
  );
}

export default ContainerCardNote;
