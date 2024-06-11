import { Products } from "@/types/provider.interface";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/services/data";

export type ErrorProps = {
  status: string;
  show: boolean;
};

export const useFetchData = () => {
  ///States
  const [products, setProducts] = useState<Products[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [error, setError] = useState<ErrorProps>({
    status: "",
    show: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/?category=${category}&company=${company}`
        );
        const data = await response.json();
        if (response.status !== 200)
          throw new Error(`Something were wrong Error: ${response.status}`);

        setProducts(data);
        setIsActive(true);
      } catch (error) {
        const errorMsg =
          error instanceof Error ? error.message : "Unknow Error";
        setError({ status: errorMsg, show: true });
      }
    };
    fetchData();
  }, [category, company]);
  return {
    products,
    isActive,
    category,
    setCategory,
    company,
    setCompany,
    statusError: error.status,
    showError: error.show,
    setError,
  };
};
