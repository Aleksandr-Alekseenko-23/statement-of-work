import React from "react";
import { NavList, NavListItem, NavLinkItem } from "./Navbar.styled";
import { links } from "./Content";

const Navbar: React.FC = () => {
  return (
    <nav>
      <NavList>
        {links.map(({ label, path, id }) => (
          <NavListItem key={id}>
            <NavLinkItem to={path}>{label}</NavLinkItem>
          </NavListItem>
        ))}
      </NavList>
    </nav>
  );
};

export default Navbar;
