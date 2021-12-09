import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/about">A Propos</NavLink>
    </div>
  );
};

export default Navigation;
