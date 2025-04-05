import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";

const Card = ({ id, image, title, price, category }) => {
  const handleRating = (rate) => {
    console.log("Rated:", rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div
      className="card d-flex flex-column h-100 overflow-hidden"
      style={{ height: "400px", display: "flex", flexDirection: "column" }}
    >
      <NavLink
        to={`/product-detail/${id}`}
        className="nav-link"
        style={{ textDecoration: "none" }}
      >
        <div
          className="img-container"
          style={{ width: "100%", height: "250px", overflow: "hidden" }}
        >
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          className="card-body d-flex flex-column flex-grow-1 overflow-hidden"
          style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
        >
          <h2
            className="text-primary text-truncate"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              margin: 0,
              textTransform: "Uppercase"
            }}
          >
            <b>{title}</b>
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              margin: "0",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            <b>Category:</b> {category}
          </p>
          <h2 style={{ margin: 0 }}>
            <b>${price}</b>
          </h2>
        </div>
      </NavLink>

      <div
        className="card-footer d-flex justify-content-between align-items-center"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <div className="rating-container">
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            size={15}
          />
        </div>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "10px" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
