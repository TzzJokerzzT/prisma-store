import React from "react";

export interface StoreProviderProps {
  children: React.ReactNode;
}

export interface StoreContextProps {
  isInView: boolean;
  setIsInView: React.Dispatch<React.SetStateAction<boolean>>;
  products: Products[];
  isActive: boolean;
  favorite: Products[];
  handleFavorite: (item: Products) => void;
  handleRemove: (item: Products) => void;
  isOpen: boolean;
  toggle: () => void;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  statusError: string;
  showError: boolean;
  setError: React.Dispatch<
    React.SetStateAction<{
      status: string;
      show: boolean;
    }>
  >;
  isSelectedCategory: number | null;
  setIsSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>;
  isSelectedCompany: number | null;
  setIsSelectedCompany: React.Dispatch<React.SetStateAction<number | null>>;
}

export type Products = {
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  category: string;
  company: string;
  about: {
    referenceURL: string;
  };
  id: number;
};
