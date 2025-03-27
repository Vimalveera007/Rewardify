import { FaRegUser, FaBox, FaClipboardList } from "react-icons/fa";
import "./Sidebar.css"; 
import store from "../../../assets/store.png";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shop-info">
        <img src={store} alt="Shop" className="shop-image" />
        <p className="shop-name">Kannan departmental</p>
        <p className="shop-id">Shop ID: 123456789</p>
      </div>
      <nav className="nav-menu">
        <button className="nav-item ">
          <FaClipboardList /> <Link to={"/dashboard"} style={{color:"grey",textDecoration:"none"}}>Dashboard</Link>
        </button>
        <button className="nav-item">
          <FaBox /> <Link to={"/orders"} style={{color:"grey",textDecoration:"none"}}>Orders</Link>
        </button>
        <button className="nav-item">
        <FaCartShopping /><Link to={"/product"} style={{color:"grey",textDecoration:"none"}}>Products</Link>
        </button>
        <button className="nav-item">
        <FaUserAlt /><Link to={"/profile"} style={{color:"grey",textDecoration:"none"}}>Profile</Link>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
