import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, SwapOutlined } from "@ant-design/icons";

const Navbar = () => {
  const location = useLocation();

  const items = [
    {
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
      key: "/",
    },
    {
      label: <Link to="/compare">Compare</Link>,
      icon: <SwapOutlined />,
      key: "/compare",
    },
  ];

  return (
    <Layout.Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#001529",
        padding: "0 20px",
      }}
    >
      <h1 style={{ color: "white", margin: 0 }}>Product Dashboard</h1>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        style={{ flex: 1, justifyContent: "flex-end" }}
        items={items}
      />
    </Layout.Header>
  );
};

export default Navbar;
