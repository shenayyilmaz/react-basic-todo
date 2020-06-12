import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={headerStyle}>
      TodoList {"  "}
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link style={linkStyle}> | </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </div>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
export default Header;
