import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailBody from "../components/DetailBody"
const ProductDetail = () => {
    const { id } = useParams();

    // DS san pham => se lay tu json-server
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



    const product = products.find((product) => product.id === parseInt(id));


    return (
        <>
            <Header />
            {product ? (
                <DetailBody product={product} />
            ) : (
                <p>Product not found.</p>
            )}
            <Footer />
        </>
    );
}

export default ProductDetail;