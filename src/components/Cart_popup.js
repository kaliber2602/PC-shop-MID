import React, { useState, useEffect } from "react";
import { Badge, Button, Table, Typography, Space } from "antd";
import { ShoppingCartOutlined, DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons"; // Thêm PlusOutlined, MinusOutlined
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Cart_popup.css';

const { Title } = Typography;

const Cart_popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  function CartItem(id, image, title, price, quantity, totalPrice) {
    this.id = Number(id);
    this.image = image;
    this.title = title;
    this.price = parseFloat(price);
    this.quantity = Number(quantity);
    this.totalPrice = parseFloat(price * quantity);
  }

  function UpdateCartItem(id, image, title, price, quantity, totalPrice) {
    this.id = Number(id);
    this.image = image;
    this.title = title;
    this.price = parseFloat(price);
    this.quantity = Number(quantity);
    this.totalPrice = parseFloat(totalPrice);
    // Thay đổi json database
  }

  useEffect(() => {
    fetch("http://localhost:3000/cartItems/")
      .then((response) => response.json())
      .then((json) => {
        const cartItemList = json.map(
          (item) =>
            new CartItem(item.id, item.image, item.title, item.price, item.quantity, item.totalPrice)
        );
        setCartItems(cartItemList);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  // Hàm tăng số lượng
  const increaseQuantity = (record) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === record.id) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: parseFloat(item.price * newQuantity),
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Hàm giảm số lượng (không cho phép giảm xuống dưới 1)
  const decreaseQuantity = (record) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === record.id && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: parseFloat(item.price * newQuantity),
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Định nghĩa cột cho bảng Ant Design
  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Space>
          <img style={{ width: "20px" }} src={record.image} alt={record.title} />
          {text}
        </Space>
      ),
      width: "60%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.age - b.age,
      width: "10%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
      sorter: (a, b) => a.age - b.age,
      render: (text, record) => (
        <Space>
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={() => decreaseQuantity(record)}
            disabled={record.quantity <= 1} // Vô hiệu hóa nếu quantity <= 1
          />
          <span>{text}</span>
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={() => increaseQuantity(record)}
          />
        </Space>
      ),
    },
    {
      title: "Total price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      sorter: (a, b) => a.age - b.age,
      width: "10%",
      
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (_, record) => (
        <Button
          type="text"
          icon={<DeleteOutlined style={{ color: "#ff4d4f" }} />}
          onClick={() => {
            setCartItems(cartItems.filter((item) => item.id !== record.id));
          }}
        />
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div className="cart-container">
      <div className="cart-popup" onClick={toggleCart}>
        <Badge count={cartItems.length}>
          <ShoppingCartOutlined className="cart-icon" />
        </Badge>
      </div>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <Title level={5}>Shopping Cart</Title>
            <button className="close-btn" onClick={toggleCart}>
              ×
            </button>
          </div>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <Table
                rowSelection={Object.assign({ type: selectionType }, rowSelection)}
                columns={columns}
                dataSource={cartItems}
                rowKey="id"
                pagination={false}
                bordered
                scroll={{ x: 600 }}
              />
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>
                  ${cartItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
              <Button
                type="primary"
                className="checkout-btn"
                style={{ backgroundColor: "#4285f4", borderColor: "#4285f4" }}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart_popup;