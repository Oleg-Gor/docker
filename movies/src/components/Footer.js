import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="movie">Movie</NavLink>
            </li>

            <li>
              <a href="http://localhost:4210/">Server</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2021 SparkyBit
        <NavLink className="grey-text text-lighten-4 right" to="/">
          Home
        </NavLink>
      </div>
    </div>
  </footer>
);
