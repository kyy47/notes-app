import React from "react";
import ButtonRemove from "./ButtonRemove";
import ButtonArchive from "./ButtonArchive";

function ListButtonAct({
  onRemove,
  id,
  onMoveFromArchived,
  archived,
  onMoveToArchived,
}) {
  return (
    <div className="wrapper-btn-act">
      <ButtonRemove onRemove={onRemove} id={id} />
      <ButtonArchive
        onMoveFromArchived={onMoveFromArchived}
        id={id}
        archived={archived}
        onMoveToArchived={onMoveToArchived}
      />
    </div>
  );
}

export default ListButtonAct;
