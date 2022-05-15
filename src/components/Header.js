import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      Hello 홍길동!
    </div>
  );
}

export default Header;
