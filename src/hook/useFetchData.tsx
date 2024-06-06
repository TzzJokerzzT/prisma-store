import { storeFetch } from "@/services/storeFetch";
import { Products } from "@/types/provider.interface";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [company, setCompany] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  console.log(selectedCategory, selectedCompany);

  const handleCategory = (items: string) => {
    items !== selectedCategory
      ? setSelectedCategory(items)
      : setSelectedCategory("");
  };

  const handleCompany = (items: string) => {
    items !== selectedCompany
      ? setSelectedCompany(items)
      : setSelectedCompany("");
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedCompany("");
  };

  useEffect(() => {
    storeFetch(selectedCategory, selectedCompany).then((data: Products[]) => {
      setProducts(data);
      const categories = [...new Set(data.map((product) => product.category))];
      setCategory(categories);
      const companies = [...new Set(data.map((product) => product.company))];
      setCompany(companies);
    });
    setIsActive(true);
  }, [selectedCategory, selectedCompany]);
  return {
    products,
    category,
    company,
    isActive,
    selectedCategory,
    selectedCompany,
    onCategory: handleCategory,
    onCompany: handleCompany,
    onReset: handleReset,
  };
};
