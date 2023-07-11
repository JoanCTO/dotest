import * as React from "react";

interface ISearchProps {
  searchAction: any;
}

// TODO check accessibility

const Search: React.FunctionComponent<ISearchProps> = ({ searchAction }) => {
  const [query, setQuery] = React.useState<any>();
  const [called, setCalled] = React.useState<any>();

  return (
    <>
      <div className="searchContainer">
        <input
          className="searchInput"
          placeholder="Search anything..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          className="searchButton"
          onClick={(e) => {
            setCalled(true);
            searchAction(e);
          }}
        >
          Search
        </div>
      </div>
      {query && called && <div>Search: {query}</div>}
    </>
  );
};

export default Search;
