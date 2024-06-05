import { storeFetch } from "@/services/storeFetch";
import { Products } from "@/types/provider.interface";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [company, setCompany] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    storeFetch().then((data: Products[]) => {
      setProducts(data);
      const categories = [...new Set(data.map((product) => product.category))];
      setCategory(categories);
      const companies = [
        ...new Set(data.map((product) => product.about.company)),
      ];
      setCompany(companies);
    });
    setIsActive(true);
  }, []);
  return { products, category, company, isActive };
};
