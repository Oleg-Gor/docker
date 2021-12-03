import { useDispatch } from "react-redux";
import { fetchSearchResult } from "../store/slices/movieSlice";

export const Search = () => {
  const dispatch = useDispatch();

  const searchMovies = (event) => {
    if (event.charCode === 13) {
      dispatch(fetchSearchResult(event.target.value));
    }
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onKeyPress={searchMovies}
    ></input>
  );
};
