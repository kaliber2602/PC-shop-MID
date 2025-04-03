import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Menu from "./menu";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Displayproduct from "./Display_product"

< link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
/>;
const ProductCategoryBody = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div>
      <section className="container-fluid">
        <div className="row">
          <LeftSidebar />
          <Menu />
          <Displayproduct />
          <RightSidebar />
        </div>
      </section>
    </div>
  );
};

export default ProductCategoryBody;
