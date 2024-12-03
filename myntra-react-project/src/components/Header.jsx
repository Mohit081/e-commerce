import { IoPerson } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
 const Bag = useSelector(store=> store.bag);
   console.log(Bag.length)

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/ecommerce.webp"
              alt="e commerce"
            />
          </Link>
        </div>
        <nav className="nav_bar ">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar  ">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
          <IoPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
          <FaHeartbeat />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
          <IoBagHandle />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{Bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
