import styles from "../../css/styles.module.css" 

export const Searchbar = ({ changeQuery }) => {
  return (
    <header className={styles.Searchbar}>
      <form
        className={styles.SearchForm}
        onSubmit={evt => {
          evt.preventDefault();
          changeQuery(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <button className={styles.SearchFormButton} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.4em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <span className={styles.SearchFormButtonLabel}></span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
