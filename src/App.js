import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./component/admin/dashboard";
import Home from "./component/home";
import Navbar from "./component/navbar";
import NotFound from "./component/notFound";
import Posts from "./component/posts";
import Products from "./component/products";
import ProductDetails from "./component/productDetail";
import Users from "./component/admin/users";

const App = (props) => {
  return (
    <div>
      <Navbar />
      <div className="ms-3">
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/products/"
            element={<Products sortBy="oldest" {...props} />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/posts">
            <Route path="/posts/:year/:month" element={<Posts />} />
            <Route path="/posts/:year" element={<Posts />} />
            <Route path="" element={<Posts />} />
          </Route>
          <Route path="/admin/*" element={<Dashboard />} />
          <Route path="/message" element={<Route to="/posts" />} /> {/* Redirect */}
          <Route path="/" exact element={<Home />} />
          <Route to="*" element={<NotFound />} /> {/* Not found page / Default page */}
          <Route path={"/not-found"} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
