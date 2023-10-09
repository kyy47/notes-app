import React from "react";
import CardNote from "../card/CardNote";
import TitleListNote from "./TitleListNote";
import ContainerCardNote from "./ContainerCardNote";

function ListNote({
  title,
  notes,
  onRemove,
  onMoveFromArchived,
  onMoveToArchived,
}) {
  return (
    <section className="list-note">
      <TitleListNote title={title} />
      <ContainerCardNote
        notes={notes}
        onRemove={onRemove}
        onMoveFromArchived={onMoveFromArchived}
        onMoveToArchived={onMoveToArchived}
      />
    </section>
  );
}

export default ListNote;
