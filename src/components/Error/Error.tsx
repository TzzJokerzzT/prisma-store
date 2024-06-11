import { StoreContext } from "@/provider/storeProvider";
import { StoreContextProps } from "@/types/provider.interface";
import { useContext } from "react";
import ButtonComponent from "../Button/Button";

const ErrorComponent = () => {
  ///Context Props
  const {
    statusError,
    setError,
    setCompany,
    setCategory,
    setIsSelectedCategory,
    setIsSelectedCompany,
  } = useContext(StoreContext) as StoreContextProps;
  ///Handler Functions
  const handleReset = () => {
    setError({ status: "", show: false });
    setCompany("");
    setCategory("");
    setIsSelectedCategory(null);
    setIsSelectedCompany(null);
  };

  return (
    <section className="h-[100vh] text-[3rem] flex flex-col justify-center items-center">
      <h1>{statusError}</h1>
      <ButtonComponent
        radius="sm"
        variant="bordered"
        onPress={handleReset}
        size="lg"
        className="h-[4rem] w-[5rem] text-[1.5rem] border-greenPrimary text-greenPrimary"
      >
        Reset
      </ButtonComponent>
    </section>
  );
};

export default ErrorComponent;
