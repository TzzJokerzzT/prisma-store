import { useCallback, useState } from "react";
import { Products } from "@/types/provider.interface";

const useFavorite = () => {
  const [favorite, setFavorite] = useState<Products[]>([]);
  
  const handleFavorite = useCallback((item: Products) => {
    setFavorite((prev) => {
      const itemsExist = prev.find((items) => items.id === item.id);
      if (itemsExist) {
        return prev.map((items) =>
          items.id === item.id
            ? { ...items, quantity: items.quantity + 1 }
            : items
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const handleRemove = useCallback((item: Products) => {
    setFavorite((prev) => {
      const itemsExist = prev.find((items) => items.id === item.id);
      if (itemsExist) {
        if (itemsExist.quantity > 1) {
          return prev.map((items) =>
            items.id === item.id
              ? { ...items, quantity: items.quantity - 1 }
              : items
          );
        } else {
          return prev.filter((items) => items.id !== item.id);
        }
      }
      return prev;
    });
  }, []);
  return { favorite, handleFavorite, handleRemove };
};

export default useFavorite;
