import React from "react";
import Footer from "./reusable/Footer";
import Navbar from "./reusable/Navbar";
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
