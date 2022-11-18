import "./navbar.styles.scss";

import NavbarLink from "../navbarLink/navbarLink.component";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar_title">another stupid pokedex</span>
      <nav className="navbar_menu">
        <NavbarLink linkText={"all"} />
        <NavbarLink linkText={"types"} />
        <NavbarLink linkText={"gens"} />
      </nav>
    </div>
  );
}

export default Navbar;