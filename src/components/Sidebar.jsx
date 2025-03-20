import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    { key: "/", label: "Product Details" },
    { key: "/compare", label: "Compare Products" },
  ];

  return (
    <Menu
      mode="vertical"
      style={{ width: 256, height: "100vh" }}
      items={menuItems}
      onClick={({ key }) => navigate(key)}
    />
  );
};

export default Sidebar;
