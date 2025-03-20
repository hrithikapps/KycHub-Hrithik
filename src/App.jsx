import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import ComparePage from "./pages/ComparePage";
import Sidebar from "./components/Sidebar";
import "antd/dist/reset.css";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Layout>
          <Sider
            width={250}
            style={{ background: "#f0f2f5", minHeight: "100vh" }}
          >
            <Sidebar />
          </Sider>
          {/* Main  */}
          <Content style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<ProductDetails />} />
              <Route path="/compare" element={<ComparePage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
