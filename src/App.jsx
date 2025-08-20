import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials"
import CulinaryServices from "./components/CulinaryServices"
import Footer from "./components/Footer"
import VideoPage from "./Pages/VideoPage";
import MenuList from "./components/MenuList";
import MenuDetail from "./Pages/MenuDetail";
import Cart from "./Pages/Cart";
import ServicesDetail from "./Pages/ServicesDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Categories />
              <MenuList />
              <Testimonials />
              <CulinaryServices />
              <Footer />
            </>
          }
        />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/services-detail" element={<ServicesDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
