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
  const [isInView, setIsInView] = useState(false);
  const { products, category, company, isActive } = useFetchData();
  const { favorite, handleFavorite, handleRemove } = useFavorite();
  const { isOpen, toggle } = useSidebarCar();
  return (
    <StoreContext.Provider
      value={{
        isInView,
        setIsInView,
        products,
        category,
        company,
        isActive,
        favorite,
        handleFavorite,
        handleRemove,
        isOpen,
        toggle,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
