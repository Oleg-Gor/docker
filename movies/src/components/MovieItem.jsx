import { NavLink } from "react-router-dom";

export const MovieItem = ({ item }) => {
  return (
    <div className="card card-style">
      <div className="card-image">
        <img src={item?.Poster} alt={item?.Title} />
        <span className="card-title">{item?.Year}</span>
      </div>
      <div className="card-action">
        <NavLink to="/movie"> {item?.Title}</NavLink>
      </div>
    </div>
  );
};
