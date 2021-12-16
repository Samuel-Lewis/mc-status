import {
    Button,
    Modal
} from "antd";
import React, { useState } from "react";
import ReactGA from "react-ga4";

type ModalScreenProps = {
  title: string;
};

export const ModalScreen: React.FunctionComponent<ModalScreenProps> = ({
  title,
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    ReactGA.event({
      category: "modal",
      action: "open",
      label: title.toLowerCase(), // optional
    });
    setIsModalVisible(true);
  };

  const closeModal = () => {
    ReactGA.event({
      category: "modal",
      action: "close",
      label: title.toLowerCase(), // optional
    });
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
