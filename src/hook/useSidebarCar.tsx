import { useState } from "react";

const useSidebarCar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((show) => !show);
  };

  return { isOpen, toggle };
};

export default useSidebarCar;
