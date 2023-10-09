import React from "react";
import Title from "./Title";
import Search from "./Search";

function Header({ onSearch, keyword }) {
  return (
    <header className="header">
      <Title />
      <Search onSearch={onSearch} keyword={keyword} />
    </header>
  );
}

export default Header;
