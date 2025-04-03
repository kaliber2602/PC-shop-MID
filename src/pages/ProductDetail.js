import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailBody from "../components/DetailBody"
const ProductDetail = () => {
    const { id } = useParams();
    const products = [
        {
            id: 1,
            image: "Products/arm_man_hinh.webp",
            title: "Item One",
            price: "24.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            image: "Products/arm_man_hinh.webp",
            title: "Item Two",
            price: "34.99",
            description: "Suspendisse potenti. Nullam quis risus eget urna."
        },
        {
            id: 3,
            image: "Products/arm_man_hinh.webp",
            title: "Item Three",
            price: "44.99",
            description: "Fusce dapibus, tellus ac cursus commodo."
        },
        {
            id: 4,
            image: "Products/arm_man_hinh.webp",
            title: "Item Four",
            price: "54.99",
            description: "Cras mattis consectetur purus sit amet fermentum."
        },
        {
            id: 5,
            image: "Products/arm_man_hinh.webp",
            title: "Item Five",
            price: "64.99",
            description: "Aenean lacinia bibendum nulla sed consectetur."
        },
        {
            id: 6,
            image: "Products/arm_man_hinh.webp",
            title: "Item Six",
            price: "74.99",
            description: "Vivamus sagittis lacus vel augue laoreet rutrum."
        },
        {
            id: 7,
            image: "Products/arm_man_hinh.webp",
            title: "Item Seven",
            price: "84.99",
            description: "Duis mollis, est non commodo luctus."
        },
        {
            id: 8,
            image: "Products/arm_man_hinh.webp",
            title: "Item Eight",
            price: "94.99",
            description: "Etiam porta sem malesuada magna mollis euismod."
        },
        {
            id: 9,
            image: "Products/arm_man_hinh.webp",
            title: "Item Nine",
            price: "104.99",
            description: "Curabitur blandit tempus porttitor."
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