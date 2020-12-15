import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <Link to="/">
        <h1 className="header">ProductsApp</h1>
      </Link>
      <div>
        <hr className="hr" />
      </div>
    </div>
  );
}
