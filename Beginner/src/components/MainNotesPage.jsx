import React, { useState } from "react";

const MainNotePage = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [sisaChar, setSisaChar] = useState(50);

  function onChange(e) {
    const oldChar = e.target.value;
    const charLen = 50 - oldChar.length;
    if (charLen < 0) {
      e.preventDefault();
      return;
    }

    setTitle(oldChar);
    setSisaChar(charLen);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTitle(() => e.target.elements.title.value);
    setBody(() => e.target.elements.body.value);

    if (title.trim().length === 0) return;
    if (body.trim().length === 0) return;

    const newNote = {
      id: Date.now(),
      title: title,
      body: body,
      createdAt: Date.now(),
      archived: false,
    };

    onAddNote(newNote);
    setTitle("");
    setBody("");
    setSisaChar(50);
  }

  return (
    <>
      <form className="note-input" onSubmit={handleSubmit}>
        <h2>Buat Catatan</h2>
        <div className="note-input__title__char-limit">
          sisa Karakter : {sisaChar}
        </div>
        <input
          className="note-input__title"
          name="title"
          type="text"
          placeholder="ini adalah judul....."
          value={title}
          onChange={onChange}
        ></input>
        <textarea
          className="note-input__body"
          name="body"
          value={body}
          onChange={(e) => setBody(() => e.target.value)}
          placeholder="tuliskan catatanmu disini"
        ></textarea>
        <button>Buat</button>
      </form>
    </>
  );
};

export default MainNotePage;
