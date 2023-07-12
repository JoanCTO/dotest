import * as React from "react";

interface ISearchProps {
  searchAction: (query: string) => void;
}

const Search: React.FunctionComponent<ISearchProps> = ({ searchAction }) => {
  const [query, setQuery] = React.useState("");
  const [called, setCalled] = React.useState(false);

  const onSearch = () => {
    setCalled(true);
    searchAction(query);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <div className="searchContainer">
        <input
          className="searchInput"
          placeholder="Search anything..."
          role="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoFocus={true}
        />
        <button className="searchButton" onClick={onSearch}>
          Search
        </button>
      </div>
      {query && called && <div>Search: {query}</div>}
    </>
  );
};

export default Search;
