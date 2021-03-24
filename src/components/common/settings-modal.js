import React from "react";
import { Modal, Row } from "antd";
import PropTypes from "prop-types";

export default function SettingsModal({ setIsModalVisible, isModalVisible }) {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        zIndex={1500}
        footer={null}
      >
        <Row></Row>
      </Modal>
    </>
  );
}

SettingsModal.propTypes = {
  setIsModalVisible: PropTypes.func,
  isModalVisible: PropTypes.bool,
};
