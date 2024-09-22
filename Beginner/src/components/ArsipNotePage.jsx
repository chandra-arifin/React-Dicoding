import React from "react";
import ArsipItem from "./ArsipItem";

const ArsipNotePage = ({ items, onDeleteArsip, onMoveArsip }) => {
  return (
    <>
      <h3>Arsip</h3>
      {items?.length > 0 ? (
        <div className="notes-list">
          {items.map((item) => (
            <ArsipItem
              key={item.id}
              item={item}
              onDeleteArsip={onDeleteArsip}
              onMoveArsip={onMoveArsip}
            />
          ))}
        </div>
      ) : (
        <div className="notes-list__empty-message">Tidak ada Arsip.</div>
      )}
    </>
  );
};

export default ArsipNotePage;
