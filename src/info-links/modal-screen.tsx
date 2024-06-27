import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";

type ModalScreenProps = {
  title: string;
};

export const ModalScreen: React.FC<ModalScreenProps> = ({
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
