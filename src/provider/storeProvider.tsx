import { createContext, useState } from "react";
import { useFetchData } from "@/hook/useFetchData";
import {
  StoreContextProps,
  StoreProviderProps,
} from "@/types/provider.interface";
import useFavorite from "@/hook/useFavorite";
import useSidebarCar from "@/hook/useSidebarCar";

export const StoreContext = createContext<StoreContextProps | null>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  ///States
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isSelectedCategory, setIsSelectedCategory] = useState<number | null>(
    null
  );
  const [isSelectedCompany, setIsSelectedCompany] = useState<number | null>(
    null
  );
  ///Custom Hooks Props
  const {
    products,
    isActive,
    category,
    setCategory,
    company,
    setCompany,
    statusError,
    showError,
    setError,
  } = useFetchData();
  const { favorite, handleFavorite, handleRemove } = useFavorite();
  const { isOpen, toggle } = useSidebarCar();

  return (
    <StoreContext.Provider
      value={{
        isInView,
        setIsInView,
        products,
        isActive,
        favorite,
        handleFavorite,
        handleRemove,
        isOpen,
        toggle,
        category,
        setCategory,
        company,
        setCompany,
        statusError,
        showError,
        setError,
        isSelectedCategory,
        setIsSelectedCategory,
        isSelectedCompany,
        setIsSelectedCompany,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
