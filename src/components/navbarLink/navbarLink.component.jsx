import "./navbarLink.styles.scss";

function NavbarLink({ linkText }) {
  return (
    <span className="navbar_link">
      {linkText}
    </span>
  );
}

export default NavbarLink;