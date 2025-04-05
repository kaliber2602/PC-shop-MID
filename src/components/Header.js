import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./Logo.png";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();


  // Danh sach san pham se lay tu json-server
  const products = [
    {
        id: 1,
        image: "Products/arm_man_hinh.webp",
        title: "Arm man hinh",
        price: "24.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 2,
        image: "Products/Lot_chuot.jpg",
        title: "Mouse pad",
        price: "34.99",
        description: "Suspendisse potenti. Nullam quis risus eget urna.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 3,
        image: "Products/monitor_lamp.jpg",
        title: "monitor lamp",
        price: "44.99",
        description: "Fusce dapibus, tellus ac cursus commodo.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 4,
        image: "Products/power_cloud.jpg",
        title: "power cloud",
        price: "54.99",
        description: "Cras mattis consectetur purus sit amet fermentum.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 5,
        image: "Products/switch_tester.webp",
        title: "switch tester",
        price: "64.99",
        description: "Aenean lacinia bibendum nulla sed consectetur.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 6,
        image: "Products/keyboard.jpg",
        title: "keyboard",
        price: "74.99",
        description: "Vivamus sagittis lacus vel augue laoreet rutrum.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 7,
        image: "Products/edifier_mr4.webp",
        title: "edifier_mr4",
        price: "84.99",
        description: "Duis mollis, est non commodo luctus.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 8,
        image: "Products/ikea.jpg",
        title: "ikea",
        price: "94.99",
        description: "Etiam porta sem malesuada magna mollis euismod.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    },
    {
        id: 9,
        image: "Products/desktop_storage.jpg",
        title: "desktop storage",
        price: "104.99",
        description: "Curabitur blandit tempus porttitor.",
        list_anh: [
            "/Products/1.png",
            "/Products/2.png",
            "/Products/3.png"
        ]
    }
];


  const handleSearchClick = () => {
    const query = searchQuery.trim().toLowerCase();
    if (query.length > 0) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredResults(results);
      setShowOverlay(results.length > 0);
    }
  };

  const handleSelectProduct = (id) => {
    navigate(`/product-detail/${id}`);
    setShowOverlay(false);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          padding: "10px 16px",
          background: "#555",
          color: "#f1f1f1",
          zIndex: 100,
        }}
        className="bg-dark d-flex"
      >
        <div className="container shadow bg-dark text-white">
          <div className="row w-100">
            <div className="logo_container col-lg-1 col-xl-1 col-md-2 col-sm-2 p-3">
              <img src={logo} className="logo_image" alt="Logo" />
            </div>

            <div className="Search_box col-lg-6 col-xl-6 col-md-8 col-sm-8 d-flex container-fluid p-2">
              <input
                className="Search_bar col-lg-10 col-xl-10 col-md-8 col-sm-8 p-2"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="Search_button col-lg-2 col-xl-2 col-md-4 col-sm-4 p-2" onClick={handleSearchClick}>
                Search
              </button>
            </div>

            <div className="navbar_container col-lg-5 col-xl-5 col-md-2 col-sm-2 d-flex flex-row-reverse">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
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
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                          <b>Home</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                          <b>About</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/product-category">
                          <b>Services</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                          <b>Contact</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/Login">
                          <b>Login</b>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay hiển thị sản phẩm gợi ý */}
      {showOverlay && (
        <div className="search-overlay" onClick={() => setShowOverlay(false)}>
          <div className="search-results-container" onClick={(e) => e.stopPropagation()}>
            <ul className="list-group">
              {filteredResults.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex align-items-center"
                  onClick={() => handleSelectProduct(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.image} alt={item.name} className="suggestion-image me-2" />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
