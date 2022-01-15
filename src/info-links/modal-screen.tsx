import React, { useState } from "react";
import ReactGA from "react-ga4";
import {
    Button,
    Modal
} from "@mantine/core";

type ModalScreenProps = {
  title: string;
};

export const ModalScreen: React.FC<ModalScreenProps> = ({
  title,
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    ReactGA.event({
      category: "modal",
      action: "open",
      label: title.toLowerCase(),
    });
    setIsModalVisible(true);
  };

  const closeModal = () => {
    ReactGA.event({
      category: "modal",
      action: "close",
      label: title.toLowerCase(),
    });
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal} variant="subtle">
        {title}
      </Button>
      <Modal
        title={title}
        opened={isModalVisible}
        onClose={closeModal}
        size="lg"
      >
        {children}
      </Modal>
    </>
  );
};
