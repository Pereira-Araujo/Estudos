import "./styles.css";

export const Search = ({ callFunction, searchValue }) => {
  return <input onChange={callFunction} value={searchValue}  />;
};
