import React from "react";
import { Modal, Table, Button, Tooltip } from "antd";
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
            title: "Actions",
            key: "actions",
            render: (_, record) => {
              const isAlreadyAdded = compareList.some(
                (p) => p.id === record.id
              );
              const isMaxReached = compareList.length >= 4;

              return (
                <Tooltip
                  title={isMaxReached ? "You can only compare 4 items" : ""}
                >
                  <Button
                    onClick={() => dispatch(addToCompare(record))}
                    disabled={isAlreadyAdded || isMaxReached}
                  >
                    Add to Compare
                  </Button>
                </Tooltip>
              );
            },
          },
        ]}
      />
    </Modal>
  );
};

export default CompareModal;
