import { useState } from "react";

const useSidebarCar = () => {
  ///States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  ///Handler Functions
  const toggle = () => {
    setIsOpen((show) => !show);
  };

  return { isOpen, toggle };
};

export default useSidebarCar;
