import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo">
        Logo
      </NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="movie">Movie</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
