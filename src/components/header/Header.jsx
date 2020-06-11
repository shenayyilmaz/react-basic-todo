import React from "react";

function Header() {
  return <div style={headerStyle}>TodoList</div>;
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};
export default Header;
