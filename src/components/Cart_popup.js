import React, { useState, useEffect } from "react";
import { Badge, Button, Table, Typography, Space } from "antd";
import { ShoppingCartOutlined, DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Cart_popup.css';

const { Title } = Typography;

const Cart_popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Fetch cart items từ JSON Server
  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/cartItems");
      if (!response.ok) throw new Error("Failed to fetch cart items");
      const json = await response.json();
      setCartItems(json);
      setError(null);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError("Could not load cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Hàm tăng số lượng
  const increaseQuantity = async (record) => {
    setLoading(true);
    setError(null);
    const newQuantity = record.quantity + 1;
    const updatedItem = {
      ...record,
      quantity: newQuantity,
      totalPrice: parseFloat((record.price * newQuantity).toFixed(2)),
    };

    try {
      const response = await fetch(`http://localhost:3000/cartItems/${record.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        if (response.status === 404) throw new Error(`Item with ID ${record.id} not found`);
        throw new Error("Failed to update quantity");
      }
      await fetchCartItems();
    } catch (error) {
      console.error("Error increasing quantity:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm giảm số lượng
  const decreaseQuantity = async (record) => {
    if (record.quantity <= 1) return;
    setLoading(true);
    setError(null);
    const newQuantity = record.quantity - 1;
    const updatedItem = {
      ...record,
      quantity: newQuantity,
      totalPrice: parseFloat((record.price * newQuantity).toFixed(2)),
    };

    try {
      const response = await fetch(`http://localhost:3000/cartItems/${record.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        if (response.status === 404) throw new Error(`Item with ID ${record.id} not found`);
        throw new Error("Failed to update quantity");
      }
      await fetchCartItems();
    } catch (error) {
      console.error("Error decreasing quantity:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ
  const removeItem = async (record) => {
    setLoading(true);
    setError(null);
    try {
      // Kiểm tra xem item có tồn tại trên server trước khi xóa
      const checkResponse = await fetch(`http://localhost:3000/cartItems/${record.id}`);
      if (!checkResponse.ok) {
        if (checkResponse.status === 404) {
          setCartItems(cartItems.filter(item => item.id !== record.id)); // Xóa khỏi state nếu không có trên server
          throw new Error(`Item with ID ${record.id} not found on server`);
        }
        throw new Error("Failed to check item existence");
      }

      const deleteResponse = await fetch(`http://localhost:3000/cartItems/${record.id}`, {
        method: "DELETE",
      });
      if (!deleteResponse.ok) {
        if (deleteResponse.status === 404) throw new Error(`Item with ID ${record.id} not found`);
        throw new Error("Failed to delete item");
      }
      await fetchCartItems();
    } catch (error) {
      console.error("Error deleting item:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
      sorter: (a, b) => a.price - b.price,
      width: "10%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "15%",
      render: (text, record) => (
        <Space>
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={() => decreaseQuantity(record)}
            disabled={record.quantity <= 1 || loading}
          />
          <span>{text}</span>
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={() => increaseQuantity(record)}
            disabled={loading}
          />
        </Space>
      ),
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      sorter: (a, b) => a.totalPrice - b.totalPrice,
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
      render: (_, record) => (
        <Button
          type="text"
          icon={<DeleteOutlined style={{ color: "#ff4d4f" }} />}
          onClick={() => removeItem(record)}
          disabled={loading}
        />
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
    },
  };

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
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <Table
                rowSelection={{ type: "checkbox", ...rowSelection }}
                columns={columns}
                dataSource={cartItems}
                rowKey="id"
                pagination={false}
                bordered
                scroll={{ x: 600 }}
              />
            )}
          </div>
          {cartItems.length > 0 && !loading && !error && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>
                  $
                  {cartItems
                    .reduce((sum, item) => sum + item.totalPrice, 0)
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