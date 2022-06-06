import React from "react";
import search from "../assets/search.svg";
import heart from "../assets/heart.svg";
import { NavLink } from "react-router-dom";

export function SideBar({ isOpen }) {
  return (
    <header className={`sidebar ${isOpen ? "hidden" : ""}`}>
      <h1 className="fs-500 text-regular logo">
        Dev<span className="text-accent">Hire</span>
      </h1>
      <nav>
        <ul className="flex" style={{ "--gap": "2rem" }}>
          <li className="flex" style={{ "--gap": "0" }}>
            <NavLink
              to=""
              className="fs-400 text-regular flex  text-gray-links"
            >
              <span className="grid nav-icons">
                <img src={search} alt={search} />
              </span>
              Home
            </NavLink>
          </li>
          <li className="flex" style={{ "--gap": "0" }}>
            <NavLink
              to="favorites"
              className="fs-400 text-regular flex  text-gray-links"
            >
              <span className="grid nav-icons">
                <img src={heart} alt={heart} />
              </span>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
