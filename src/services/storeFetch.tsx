import { BASE_URL } from "./data";

export interface storeFetchProps {
  category: string;
  company: string;
}

export const storeFetch = async (category: string, company: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/?category=${category}&company=${company}`
    );
    if (!response.ok) {
      throw new Error("Error to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error to fetch data: ${error}`);
  }
};
