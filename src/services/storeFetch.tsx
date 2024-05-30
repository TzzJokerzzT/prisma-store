import { BASE_URL } from "./data";

export const storeFetch = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Error to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error to fetch data: ${error}`);
  }
};
