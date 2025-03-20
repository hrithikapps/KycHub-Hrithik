import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "antd";
import { removeFromCompare } from "../store";
import CompareModal from "../components/CompareModal";

const ComparePage = () => {
  const compareList = useSelector((state) => state.compare);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Compare Products</h1>
      <Button onClick={() => setModalOpen(true)}>Add More</Button>
      <CompareModal open={isModalOpen} onClose={() => setModalOpen(false)} />

      <Table
        dataSource={compareList}
        rowKey="id"
        pagination={false}
        columns={[
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
            title: "Actions",
            key: "actions",
            render: (_, record) => (
              <Button onClick={() => dispatch(removeFromCompare(record.id))}>
                Remove
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
};

export default ComparePage;
