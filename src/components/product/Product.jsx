import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Form, Modal, Button } from "react-bootstrap";

import "./Product.css";
import Navbar from "../dashboard/navbar/Navbar";
import Sidebar from "../dashboard/sidebar/Sidebar";

const initialProducts = [
  {
    name: "Ooty Apple",
    price: "₹100",
    quantity: "5 kg",
    available: true,
    category: "Fruits & Vegetables",
  },
  {
    name: "Dove Natural Soap",
    price: "₹100",
    quantity: "5 pcs",
    available: true,
    category: "Dairy, Bread and Eggs",
  },
  {
    name: "Basmati Rice",
    price: "₹200",
    quantity: "2 kg",
    available: true,
    category: "Atta, Dal and Rice",
  },
  {
    name: "Almonds",
    price: "₹300",
    quantity: "1 kg",
    available: true,
    category: "Dry fruits and Masala",
  },
  {
    name: "Green Tea",
    price: "₹150",
    quantity: "20 bags",
    available: true,
    category: "Tea, Coffee and more",
  },
  {
    name: "Dark Chocolate",
    price: "₹250",
    quantity: "200g",
    available: true,
    category: "Chocolate and Desserts",
  },
];

const categories = [
  "Fruits & Vegetables",
  "Dairy, Bread and Eggs",
  "Atta, Dal and Rice",
  "Dry fruits and Masala",
  "Tea, Coffee and more",
  "Chocolate and Desserts",
];

const Product = () => {
  const [products, setProducts] = useState(initialProducts);
  const [openCategory, setOpenCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    category: categories[0],
  });

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleAvailability = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].available = !updatedProducts[index].available;
    setProducts(updatedProducts);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, available: true }]);
    setShowModal(false);
    setNewProduct({
      name: "",
      price: "",
      quantity: "",
      category: categories[0],
    });
  };

  const handleEditProduct = (index) => {
    setSelectedProductIndex(index);
    setNewProduct({ ...products[index] });
    setShowEditModal(true);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = [...products];
    updatedProducts[selectedProductIndex] = newProduct;
    setProducts(updatedProducts);
    setShowEditModal(false);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="product-container">
          <div className="product-card">
            <div className="product-header">
              <h2>My Product Listing</h2>
              <button
                className="add-product-btn"
                onClick={() => setShowModal(true)}
              >
                + Add a Product
              </button>
            </div>

            <div className="search-container">
              <input
                type="text"
                placeholder="Search for products"
                className="search-box"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <FiSearch className="search-icon" />
            </div>

            {categories.map((category, catIndex) => (
              <div key={catIndex} className="category-section">
                <button
                  className="category-button"
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                  <BsThreeDotsVertical />
                </button>

                {openCategory === category && (
                  <div className="product-list">
                    <table className="product-table">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Avail. Quantity</th>
                          <th>Availability</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products
                          .filter((product) => product.category === category)
                          .map((product, index) => (
                            <tr key={index}>
                              <td>{product.name}</td>
                              <td>{product.price}</td>
                              <td>{product.quantity}</td>
                              <td>
                                <div
                                  className={`toggle-switch ${
                                    product.available ? "on" : ""
                                  }`}
                                  onClick={() => toggleAvailability(index)}
                                >
                                  <div className="switch-button"></div>
                                </div>
                              </td>
                              <td className="d-flex gap-3">
                                <button
                                  className="action-btn"
                                  onClick={() => handleEditProduct(index)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="delete-btn"
                                  onClick={() => handleDeleteProduct(index)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdateProduct}>
            Update Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product;
