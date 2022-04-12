import { Link } from 'react-router-dom'
import Footer_img from '../images/one-funnel-away_logo_funnel.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="container-fluid">
        <div>
          <img className="img-fluid nav_img" src={Footer_img} alt="" />
        </div>

        <div className="nav_Sec2 container-fluid">
          <Link className="nav_link">Join </Link>
          <Link className="nav_link">Member </Link>
          <Link className="nav_link"> Affiliates </Link>

          <Link className="nav_link"> Successes </Link>
          <Link className="nav_link"> Support </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
