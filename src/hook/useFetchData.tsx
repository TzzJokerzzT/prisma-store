import { storeFetch } from "@/services/storeFetch";
import { Products } from "@/types/provider.interface";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setIsLoaded(false);
    storeFetch().then((data) => {
      setProducts(data);
    });
    setIsActive(true);
    setIsLoaded(true);
    setIsLoading(false);
  }, []);
  return { products, isLoading, isLoaded, isActive };
};
