import Carousel from "./Carousel";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pagination from "react-bootstrap/Pagination";

const Displayproduct = () => {
    const productImages = [
        "Products/inner_1.jpg",
        "Products/inner2.jpg",
        "Products/inner_3.jpg",
    ];

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

    return (
        <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12 mb-4 d-flex flex-column" style={{ backgroundColor: "white", zIndex: 10 }}>
            <Carousel images={productImages} />

            <div className="d-flex flex-column flex-grow-1">
                <div className="row flex-grow-1 mb-3">
                    {products.map((product) => (
                        <div className="col-md-4 col-sm-6 mb-3" key={product.id}>
                            <Card
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
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