import { Link } from "react-router-dom";
import Footer_img from "../images/one-funnel-away_logo_funnel.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="img-fluid nav_img" src={Footer_img} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link" aria-current="page">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Resgistration" class="nav-link" href="#">
                  Member Login
                </Link>
              </li>
     
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
