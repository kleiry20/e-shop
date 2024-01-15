import pro from "../../assets/common/pro.png";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = (props: any) => {
  return (
    <div className="navbar">
      <a className="logo" href="/">
        <img
          src={pro}
          style={{ width: "8rem", height: "5rem" }}
          className="logo-icon"
          alt="Provision store logo"
        />
      </a>
      <div>
        <Searchbar filterItems={props.filterItems} />
      </div>
      <div className="nav-right">
        <a href="about">About</a> <a href="/login">Log Out</a>
      </div>
    </div>
  );
};

export default Navbar;
