import "/src/styles/style.css";
import MainNotePage from "./components/MainNotesPage";
import ActiveNotePage from "./components/ActiveNotePage";
import { getInitialData } from "./data/index";
import { useState } from "react";
import ArsipNotePage from "./components/ArsipNotePage";
import SearchNotePage from "./components/SearchNotePage";

function App() {
  const [originalNoteItems, setOriginalNoteItems] = useState([]);
  const [noteItems, setNoteItems] = useState(getInitialData);
  const [arsipItems, setArsipItems] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  function onSearchNote(title) {
    setIsSearch(title.length > 0);

    if (title.length === 0) return;

    setOriginalNoteItems(noteItems);

    setOriginalNoteItems((items) =>
      items.filter((e) => e.title.toLowerCase().includes(title.toLowerCase()))
    );
  }

  function onAddNote(item) {
    setIsSearch(false);

    setNoteItems((old) => [...old, item]);
  }

  function onArsipItem(id) {
    setIsSearch(false);

    const item = noteItems.find((e) => e.id === id);

    setNoteItems((items) => items.filter((e) => e.id !== id));
    setArsipItems((old) => [...old, item]);
  }

  function onMoveArsip(id) {
    setIsSearch(false);

    const item = arsipItems.find((e) => e.id === id);

    setArsipItems((items) => items.filter((e) => e.id !== id));
    setNoteItems((old) => [...old, item]);
  }

  function onDeleteItem(id) {
    setIsSearch(false);
    setNoteItems((items) => items.filter((e) => e.id !== id));
  }

  function onDeleteArsip(id) {
    setArsipItems((items) => items.filter((e) => e.id !== id));
  }

  return (
    <>
      <SearchNotePage onSearchNote={onSearchNote} />
      <MainNotePage onAddNote={onAddNote} />
      <ActiveNotePage
        items={isSearch ? originalNoteItems : noteItems}
        onDeleteItem={onDeleteItem}
        onArsipItem={onArsipItem}
      />
      <ArsipNotePage
        items={arsipItems}
        onDeleteArsip={onDeleteArsip}
        onMoveArsip={onMoveArsip}
      />
    </>
  );
}

export default App;
