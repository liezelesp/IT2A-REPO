import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MyComponent({ onClickComplete, onClickEdit, onClickDelete }) {
  return (
    <div>
  <button className="button-complete task-button" onClick={onClickComplete}>
    <FontAwesomeIcon icon="check-circle" />
  </button>
  <button className="button-edit task-button" onClick={onClickEdit}>
    <FontAwesomeIcon icon="edit" />
  </button>
  <button className="button-delete task-button" onClick={onClickDelete}>
    <FontAwesomeIcon icon="trash" />
  </button>
</div>

  );
}
