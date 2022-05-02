import react from "react";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchItems(props.term);
  };

  return (
    <div className="search-bar">
      <form id="searchAPI" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            id="terms"
            placeholder="Enter search terms here..."
            value={props.term}
            onChange={(e) => props.setTerm(e.target.value)}
          />
        </label>
        <input type="submit" className="search-button" value="Search" />
      </form>
      <p style={{ color: "red" }}>
        <em>{props.term && "Searching for terms: " + props.term}</em>
      </p>
    </div>
  );
};

export default Search;
