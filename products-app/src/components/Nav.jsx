import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="header">
      <Link to="/">
        <h1>ProductsApp</h1>
      </Link>
      <hr className="hr" />
    </div>
  );
}
