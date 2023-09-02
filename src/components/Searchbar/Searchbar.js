export const Searchbar = ({ changeQuery }) => {
  return (
    <header>
      <form onSubmit={evt => {
        evt.preventDefault();
        changeQuery(evt.target.elements.query.value);
        evt.target.reset();
      }}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
