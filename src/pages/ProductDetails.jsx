import React, { useEffect, useState } from "react";
import { Table, Button, Input, Select, Spin, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCompare, setProducts } from "../store";

const { Search } = Input;
const { Option } = Select;

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const compareList = useSelector((state) => state.compare);

  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        dispatch(setProducts(res.data.products));
        setFilteredProducts(res.data.products);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
    let sortedProducts = [...filteredProducts];

    switch (value) {
      case "name_asc":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name_desc":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price_low_high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img
          src={thumbnail}
          alt="Product Thumbnail"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Compare",
      key: "compare",
      render: (_, record) => {
        const isAlreadyAdded = compareList.some((p) => p.id === record.id);
        const isMaxReached = compareList.length >= 4;
        const isDisabled = isAlreadyAdded || isMaxReached;

        return (
          <Tooltip
            title={
              isMaxReached
                ? "Maximum 4 products can be compared"
                : isAlreadyAdded
                ? "Product already added"
                : ""
            }
          >
            <Button
              onClick={() => dispatch(addToCompare(record))}
              disabled={isDisabled}
            >
              Compare
            </Button>
          </Tooltip>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <h1>Product Details</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Search
          placeholder="Search product by name"
          allowClear
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: "300px" }}
          value={searchText}
        />

        <Select
          placeholder="Sort By"
          onChange={handleSortChange}
          value={sortOption}
          style={{ width: "200px" }}
          allowClear
        >
          <Option value="name_asc">Product Name (A-Z)</Option>
          <Option value="name_desc">Product Name (Z-A)</Option>
          <Option value="price_low_high">Price (Low to High)</Option>
          <Option value="price_high_low">Price (High to Low)</Option>
        </Select>
      </div>

      {/* Conditional rendering for the Spinner/data from productList */}
      {loading ? (
        <Spin size="large" style={{ alignSelf: "center", marginTop: "20px" }} />
      ) : (
        <Table
          dataSource={filteredProducts}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      )}
    </div>
  );
};

export default ProductDetails;
