import React from "react";
import { Modal, Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addToCompare } from "../store";

const CompareModal = ({ open, onClose }) => {
  const products = useSelector((state) => state.products);
  const compareList = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title="Add More Products"
    >
      <Table
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        columns={[
          { title: "Title", dataIndex: "title", key: "title" },
          { title: "Price", dataIndex: "price", key: "price" },
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
              <Button
                onClick={() => dispatch(addToCompare(record))}
                disabled={compareList.some((p) => p.id === record.id)}
              >
                Add to Compare
              </Button>
            ),
          },
        ]}
      />
    </Modal>
  );
};

export default CompareModal;
