import React from "react";
import { showFormattedDate } from "../data";

const ArsipItem = ({ item, onDeleteArsip, onMoveArsip }) => {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content ">
          <h2 className="note-item__title">{item.title}</h2>
          <div className="note-item__date">
            {showFormattedDate(item.createdAt)}
          </div>
          <div className="note-item__body">{item.body}</div>
        </div>
        <div className="note-item__action">
          <button
            className="note-item__delete-button"
            onClick={() => onDeleteArsip(item.id)}
          >
            Delete
          </button>
          <button
            className="note-item__archive-button"
            onClick={() => onMoveArsip(item.id)}
          >
            Pindahkan
          </button>
        </div>
      </div>
    </>
  );
};

export default ArsipItem;
