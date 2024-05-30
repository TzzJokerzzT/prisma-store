export interface StoreProviderProps {
  children: React.ReactNode;
}

export interface StoreContextProps {
  products: Products[];
  isLoading: boolean;
  isLoaded: boolean;
  isActive: boolean;
  favorite: Products[];
  handleFavorite: (item: Products) => void;
  handleRemove: (item: Products) => void;
  isOpen: boolean;
  toggle: () => void;
}

export type Products = {
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  category: string;
  about: {
    company: string;
    referenceURL: string
  }
  id: number;
};
