import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import Search from "./components/search";
import { LIST } from "./mocks";
import Loader from "./components/loader";
import ReactPaginate from "react-paginate";
import { SEARCH_API } from "./urls";

const Cards = lazy(() => import("./components/cards"));

const CARDS_PER_PAGE = 10;

const fetchSearchQuery = async (
  query: string,
  setter: (value: number[]) => void
) => {
  let response = await fetch(SEARCH_API + "search?q=" + query);
  const json = await response.json();
  setter(json.objectIDs || []);
};

function App() {
  const [listOfCards, setCards] = useState<number[]>(LIST.objectIDs);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const totalPages = Math.ceil(listOfCards.length / CARDS_PER_PAGE);

  const cardsToDisplay = React.useMemo(
    () =>
      listOfCards.slice(
        (currentPage - 1) * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE
      ),
    [listOfCards, currentPage]
  );

  return (
    <div className="App">
      <Search searchAction={(query) => fetchSearchQuery(query, setCards)} />
      <Suspense fallback={<Loader />}>
        <Cards list={cardsToDisplay} />
      </Suspense>
      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          breakLabel="..."
          renderOnZeroPageCount={null}
          className="pagination"
          activeClassName="currentPage"
          onPageChange={(page) => {
            setCurrentPage(page.selected + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}
    </div>
  );
}

export default App;
