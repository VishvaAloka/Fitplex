import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./Screens/Home";
import SignupPage from "./Screens/Login&Register/Signup";
import LoginPage from "./Screens/Login&Register/Login";
import ProductList from "./Admin/ProductList";
import UserList from "./Admin/UserList";
import AddEditProduct from "./Admin/AddEditProduct";
import AddEditUser from "./Admin/AddEditUser";
import Programs from "./components/Programs/Programs";
import { programsData } from "./components/data/programsData.js";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import logo from "./logo.svg";
import "./App.css";


axios.defaults.baseURL = `http://localhost:5001`;

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers(); // Fetch users after deleting a user
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts(); // Fetch products after deleting a product
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div className="mx-auto app h-[100vh]">
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<programsData />} />
            <Route path="/" element={<Reasons />} />
            <Route path="/" element={<Plans />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={"Please Navigate Around"} />

            <Route
              path="/users"
              element={
                <UserList
                  users={users}
                  fetchUsers={fetchUsers}
                  deleteUser={deleteUser}
                />
              }
            />
            <Route
              path="/products"
              element={
                <ProductList
                  products={products}
                  fetchProducts={fetchProducts}
                  deleteProduct={deleteProduct}
                />
              }
            />
            <Route
              path="/add-product"
              element={<AddEditProduct fetchProducts={fetchProducts} />}
            />
            <Route
              path="/add-user"
              element={<AddEditUser fetchUsers={fetchUsers} />}
            />
            <Route
              path="/edit-product/:id"
              element={<AddEditProduct fetchProducts={fetchProducts} />}
            />
            <Route
              path="/edit-user/:id"
              element={<AddEditUser fetchUsers={fetchUsers} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
