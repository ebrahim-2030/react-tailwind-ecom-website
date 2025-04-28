// import React Router and pages/components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import banner_men from "./assets/banner_mens.png";
import banner_women from "./assets/banner_women.png";
import banner_kids from "./assets/banner_kids.png";

const App = () => {
  return (
    <div className="text-custom-black">
      {/* router wraps the entire app */}
      <Router>
        {/* navbar component */}
        <Navbar />

        <Routes>
          {/* define app routes */}
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<Category banner={banner_men} category="men" />}
          />
          <Route
            path="/women"
            element={<Category banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<Category banner={banner_kids} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>

        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
