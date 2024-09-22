import React, { useState } from "react";

const SearchNotePage = ({ items, onSearchNote }) => {
  const [title, setTitle] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearchNote(title);
    }
  }

  return (
    <>
      <h3>Notes</h3>
      <input
        type="text"
        name="cari"
        placeholder="cari catatan..."
        onChange={(e) => setTitle(() => e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
};

export default SearchNotePage;
