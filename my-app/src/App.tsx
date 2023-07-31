import React, { useState } from "react";
import "./App.css";
import Search from "./search";
import Cards from "./components/cards";
import { LIST } from "./mocks";

const API = "https://collectionapi.metmuseum.org/public/collection/v1/";

// 1. TODO fetch query list and add some types
function fetchSearchQuery(e: any, setter: any) {
  const searchInputValue = e.target.value;
  const API_SEARCH_URL = API + "search?q=" + searchInputValue;

  // fetch here the museum API, remove mock data
  setter(LIST.objectIDs);
}

function App() {
  const [listOfCards, setCards] = useState<any>(LIST.objectIDs);
  return (
    <div className="App">
      <Search searchAction={(e: any) => fetchSearchQuery(e, setCards)} />
      <Cards list={listOfCards} />
    </div>
  );
}

export default App;
