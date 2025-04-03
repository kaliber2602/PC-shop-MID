import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Menu from "./menu";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Displayproduct from "./Displayproduct"

< link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
/>;
const ProductCategoryBody = () => {

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
