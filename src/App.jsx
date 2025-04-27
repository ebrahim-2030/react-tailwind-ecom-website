// import React Router and pages/components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* router wraps the entire app */}
      <Router>
        {/* navbar component */}
        <Navbar />

        <Routes>
          {/* define app routes */}
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Category category="men" />} />
          <Route path="/women" element={<Category category="women" />} />
          <Route path="/kids" element={<Category category="kids" />} />
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
