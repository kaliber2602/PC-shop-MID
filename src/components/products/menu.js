import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Menu = ({ onSelectCategory }) => {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };
  return (
    <div className="col-lg-2 col-xl-2 col-sm-12 col-md-12 mb-4 menu">
      <h1
        className="p-1 text-center"
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#32383D",
          padding: "1rem",
          textShadow:
            "1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.8)",
        }}
      >
        <b>Decor Dream</b>
      </h1>

      {menuItems.map((item, index) => (
        <div key={index} className="dropdown show p-2 rounded mb-0">
          <a
            className={`btn btn-secondary col-12 ${item.subItems ? "dropdown-toggle" : ""}`}
            href="#"
            role="button"
            id={`dropdownMenuLink-${index}`}
            data-bs-toggle={item.subItems ? "dropdown" : ""}
            aria-haspopup={item.subItems ? "true" : ""}
            aria-expanded={item.subItems ? "false" : ""}
            onClick={(e) => {
              e.preventDefault();
              if (!item.subItems) handleCategoryClick(item.title);
            }}
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              overflowWrap: "break-word"
            }}
          >
            {item.title}
            {item.subItems && (
              <span className="ms-2">
                <i className="bi bi-chevron-down"></i>
              </span>
            )}
          </a>

          {item.subItems && (
            <div className="dropdown-menu" aria-labelledby={`dropdownMenuLink-${index}`}>
              {item.subItems.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(subItem);
                  }}
                >
                  {subItem}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

};

const menuItems = [
  { title: "PC & Laptop", subItems: ["PC", "Laptop"] },
  {
    title: "PC Components",
    subItems: [
      "CPU",
      "GPU (Graphics Card)",
      "RAM",
      "SSD & HDD (Storage)",
      "PSU (Power Supply Unit)",
      "Motherboard",
      "Cooling Solutions",
    ],
  },
  { title: "Monitors" },
  {
    title: "Mechanical Keyboards & Accessories",
    subItems: ["Mechanical Keyboards", "Keycap Sets"],
  },
  {
    title: "Mice & Mousepads",
    subItems: ["Gaming Mice", "Mousepads"],
  },
  {
    title: "Headphones & Speakers",
    subItems: ["Headphones", "Speakers"],
  },
  {
    title: "Chairs & Desks",
    subItems: ["Chairs", "Desks"],
  },
  {
    title: "Other Accessories",
    subItems: [
      "Cables & Adapters",
      "Hubs & Docking Stations",
      "LED Lighting",
      "Stands & Mounts",
    ],
  },
];

export default Menu;

