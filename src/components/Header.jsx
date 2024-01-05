import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Header() {
  return (
    <header className="flex  flex-cols-2 items-center bg-white">
      <Link to="/">
        <div className="w-24 h-24 p-4 mx-8">
          <img src="img/logoMuseo.png" alt="Logo MRC" />
        </div>
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
