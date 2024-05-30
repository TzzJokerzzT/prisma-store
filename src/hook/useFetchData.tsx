import { storeFetch } from "@/services/storeFetch";
import { Products } from "@/types/provider.interface";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    storeFetch().then((data) => {
      setProducts(data);
    });
    setIsActive(true);
  }, []);
  return { products, isActive };
};
