import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";

const Card = ({ id, image, title, price }) => {
  const handleRating = (rate) => {
    console.log("Rated:", rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <NavLink to={`/product-detail/${id}`} className="nav-link" style={{ textDecoration: "none" }}>
      <div className="card d-flex flex-column h-100">
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body d-flex flex-column">
          <h2 className="text-primary">
            <b>{title}</b>
          </h2>
          <h2>
            <b>${price}</b>
          </h2>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="rating-container">
            <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
              size={15}
            />
          </div>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
