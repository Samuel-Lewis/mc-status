import {
    Button,
    Modal
} from "antd";
import React, { useState } from "react";

type ModalScreenProps = {
  title: string;
};

export const ModalScreen: React.FunctionComponent<ModalScreenProps> = ({
  title,
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        {title}
      </Button>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={closeModal}
        onCancel={closeModal}
        footer={
          <Button key="Ok" type="primary" onClick={closeModal}>
            Ok
          </Button>
        }
      >
        {children}
      </Modal>
    </>
  );
};
