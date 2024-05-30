import { useContext, useState } from "react";
import { CardComponent } from "./Cards";
import { StoreContext } from "@/provider/storeProvider";
import { StoreContextProps } from "@/types/provider.interface";
import ButtonComponent from "../Button/Button";

const Card = () => {
  const { products, isActive } = useContext(StoreContext) as StoreContextProps;
  const [cardsToShow, setCardsToShow] = useState<number>(10);

  const showMoreCards = () => {
    setCardsToShow((prev) => prev + 10);
  };

  return (
    <section
      className={`flex flex-col items-center transform ${
        isActive ? "animate-appear" : ""
      }`}
    >
      <div className="flex flex-wrap gap-3 justify-center z-10">
        {products.slice(0, cardsToShow).map((items) => (
          <CardComponent key={items.id} items={items} />
        ))}
      </div>
      <div className="m-2">
        {cardsToShow < products.length && (
          <ButtonComponent
            className="border-greenPrimary text-greenPrimary p-1"
            radius="sm"
            variant="bordered"
            onPress={showMoreCards}
          >
            Load More
          </ButtonComponent>
        )}
      </div>
    </section>
  );
};

export default Card;
