import { Spinner } from "@nextui-org/react";

const SpinnerComponent = () => {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center">
      <Spinner color="success" size="lg" />
      <p className="m-[0.5rem]">Loading...</p>
    </section>
  );
};

export default SpinnerComponent;
