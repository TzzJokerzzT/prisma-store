import { createContext } from "react";
import { useFetchData } from "@/hook/useFetchData";
import {
  StoreContextProps,
  StoreProviderProps,
} from "@/types/provider.interface";
import useFavorite from "@/hook/useFavorite";
import useSidebarCar from "@/hook/useSidebarCar";

export const StoreContext = createContext<StoreContextProps | null>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const { products, isLoading, isLoaded, isActive } = useFetchData();
  const { favorite, handleFavorite, handleRemove } = useFavorite();
  const { isOpen, toggle } = useSidebarCar();
  return (
    <StoreContext.Provider
      value={{
        products,
        isLoading,
        isLoaded,
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
