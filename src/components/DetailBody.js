import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RightSidebar from "./products/RightSidebar";
import LeftSidebar from "./products/LeftSidebar";
import Carousel from "./products/Carousel";

import "../index.css";

const DetailBody = ({ product }) => {
    const images = product.list_anh || [];

    return (
        <section className="container-fluid">
            <div className="row">
                {/* Left Sidebar */}
                <LeftSidebar />

                <div className="item col-xl-8 col-lg-8 col-md-12 col-sm-12 p-4">
                    <div className="row">
                        <div className="col-md-5">
                            {/* Carousel for main images */}
                            <Carousel images={images} />

                            {/* Chia sẻ */}
                            <div className="mt-3 d-flex align-items-center">
                                <span className="me-2">Chia sẻ:</span>
                                <a href="https://www.messenger.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="/item_info/messenger_logo.webp" alt="Messenger" width="32" />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="/item_info/facebook_logo.webp" alt="Facebook" width="32" />
                                </a>
                                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="/item_info/pinterest_logo.jpg" alt="Pinterest" width="32" />
                                </a>
                            </div>
                        </div>

                        <div className="container col-md-7">
                            {/* Thông tin sản phẩm */}
                            <h3>{product.title}</h3>
                            <p><strong>Category:</strong> {product.category}</p>
                            <p>
                                <span className="text-danger h1">${product.price}</span>
                            </p>

                            <p>
                                <strong>Quantity:</strong>
                                <input type="number" value="1" min="1" className="form-control-inline w-2" />
                            </p>
                            <button className="btn btn-dark">Add to cart</button>
                        </div>

                        {/* Mô tả sản phẩm */}
                        <div className="content-wrapper d-flex flex-column" style={{
                            display: "flex",
                            flexDirection: "column",
                            minHeight: "calc(100vh - 100px)",
                        }}>
                            <h1 className="item-title" style={{ marginBottom: "10px" }}>About this item</h1>
                            <h2 className="item-subtitle" style={{ marginBottom: "10px" }}>PRODUCT DESCRIPTION</h2>
                            <pre className="item-description" style={{
                                flexGrow: 1,
                                maxHeight: "400px",
                                overflowY: "auto",
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word"
                            }}>
                                {product.description}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <RightSidebar />
            </div>
        </section>
    );
};

export default DetailBody;
