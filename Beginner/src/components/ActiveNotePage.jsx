import React from "react";
import ActiveItem from "./ActiveItem";

const ActiveNotePage = ({ items, onDeleteItem, onArsipItem }) => {
  return (
    <>
      <h3>Catatan Aktif</h3>
      {items?.length > 0 ? (
        <div className="notes-list">
          {items.map((item) => (
            <ActiveItem
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onArsipItem={onArsipItem}
            />
          ))}
        </div>
      ) : (
        <div className="notes-list__empty-message">Tidak ada Catatan.</div>
      )}
    </>
  );
};

export default ActiveNotePage;
