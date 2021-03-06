import { useState } from 'react';

const useModal = () => {
  const [isModalOpened, setModalVisibility] = useState(false);

  const openModal = () => setModalVisibility(true);

  const closeModal = () => setModalVisibility(false);

  return { isModalOpened, openModal, closeModal };
};

export default useModal;
