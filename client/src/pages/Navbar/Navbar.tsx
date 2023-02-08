import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

type Props = {}

function Navbar({}: Props) {

  const location = useLocation();
  const [homeLinkClasses, setHomeLinkClasses] = useState("nav-link");
  const [itemsLinkClasses, setItemsLinkClasses] = useState("nav-link");
  const [createLinkClasses, setCreateLinkClasses] = useState("nav-link");

  useEffect(() => {
    if (location.pathname == "/") {
      setHomeLinkClasses("nav-link active");
      setItemsLinkClasses("nav-link");
      setCreateLinkClasses("nav-link");
    } else if (location.pathname == "/items") {
      setItemsLinkClasses("nav-link active");
      setHomeLinkClasses("nav-link");
      setCreateLinkClasses("nav-link");
    } else if(location.pathname == "/items/create") {
      setCreateLinkClasses("nav-link active");
      setItemsLinkClasses("nav-link");
      setHomeLinkClasses("nav-link");
    } else {
      setHomeLinkClasses("nav-link");
      setItemsLinkClasses("nav-link");
      setCreateLinkClasses("nav-link");
    }
  }, [location]);

  return (

    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="navbar-brand-div">
          <Link className="navbar-brand " to="/">
           
            {/* <BrandIcon /> */}
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={homeLinkClasses} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={itemsLinkClasses} to="/items">
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className={createLinkClasses} to="/items/create">
                Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;