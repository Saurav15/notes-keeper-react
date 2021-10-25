import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import Toggle from "./components/Toggle";

function App() {
  const [data, setData] = useState([
    {
      id: nanoid(),
      text: "Hello!! This is the first note.",
      date: "22/01/2021",
    },
    {
      id: nanoid(),
      text: "Hello!! This is the second note.",
      date: "01/11/2020",
    },
    {
      id: nanoid(),
      text: "Hello!! This is the third note.",
      date: "29/12/2017",
    },
    {
      id: nanoid(),
      text: "Hello!! This is the fourth note.",
      date: "19/03/2020",
    },
    {
      id: nanoid(),
      text: "Hello!! This is the fifth note.",
      date: "12/09/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleNewNoteText = (text) => {
    console.log(text);
    const date = new Date().toLocaleString().split(",")[0];
    const id = nanoid();
    const newData = { id, text, date };

    const newText = [...data, newData];
    setData(newText);
  };

  const handleNoteDelete = (key) => {
    console.log(key);
    const newData = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== key) {
        newData.push(data[i]);
      }
    }
    setData(newData);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  return (
    <div className={toggle ? "darkMode topComponent" : "topComponent"}>
      <div className="App">
        <Toggle handleToggle={handleToggle} toggleState={toggle} />
        <SearchBar
          handleSearchText={handleSearchText}
          searchText={searchText}
        />

        <NotesList
          notes={data.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleNewNoteText={handleNewNoteText}
          handleNoteDelete={handleNoteDelete}
        />
      </div>
    </div>
  );
}

export default App;
