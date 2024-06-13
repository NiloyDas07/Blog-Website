import React from "react";
import { Link } from "react-router-dom";

import { Container, DarkModeToggle, Logo, Navbar, SearchBar } from "../";

function Header() {
  return (
    <header className="h-24 content-center">
      <Container className="flex justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex gap-5 items-center">
          <Navbar />
          <SearchBar />
          <DarkModeToggle />
        </div>
      </Container>
    </header>
  );
}

export default Header;
