import React, { useState, useEffect } from "react";
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

    // Khởi tạo state để lưu products
    const [products, setProducts] = useState([]);

    // Hàm fetch dữ liệu
    async function getProducts() {
        try {
            const response = await fetch("http://localhost:3000/products/");
            const Products = await response.json();
            const formattedProducts = Products.map(product => ({
                id: Number(product.id),
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
                list_anh: product.list_anh,
                category: product.category
            }));
            return formattedProducts;
        } catch (error) {
            console.error("Lỗi khi fetch products:", error);
            return [];
        }
    }

    // Sử dụng useEffect để gọi getProducts khi component mount
    useEffect(() => {
        getProducts().then(fetchedProducts => {
            setProducts(fetchedProducts); // Cập nhật state
        });
    }, []); // Mảng rỗng nghĩa là chỉ chạy một lần khi component mount

    // Lọc sản phẩm theo category đã chọn
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    // console.log(products); // Kiểm tra dữ liệu trong console

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
        </div>
    );
};

export default Displayproduct;