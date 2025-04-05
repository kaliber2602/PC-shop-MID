import React from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pagination from "react-bootstrap/Pagination";

const Displayproduct = ({ selectedCategory }) => {
    const productImages = [
        "Products/inner_1.jpg",
        "Products/inner2.jpg",
        "Products/inner_3.jpg",
    ];

    // Data => mot se lay tu json-server
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
            ],
            category: "Monitors"
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
            ],
            category: "Mousepads"
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
            ],
            category: "Monitors"
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
            ],
            category: "RAM"
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
            ],
            category: "Accessories"
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
            ],
            category: "Mechanical Keyboards "
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
            ],
            category: "Gaming Headsets"
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
            ],
            category: "Desks"
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
            ],
            category: "CPU"
        }
    ];

    // Lọc sản phẩm theo category đã chọn
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;  

    return (
        <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12 mb-4 d-flex flex-column" style={{ backgroundColor: "white", zIndex: 10 }}>
            <Carousel images={productImages} />

            <div className="d-flex flex-column flex-grow-1">
                <div className="row flex-grow-1 mb-3">
                    {filteredProducts.map((product) => (
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 mb-4" key={product.id}>
                            <Card
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                category={product.category}
                            />
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-center mt-auto">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </div>
            </div>
        </div >
    );
};

export default Displayproduct;
