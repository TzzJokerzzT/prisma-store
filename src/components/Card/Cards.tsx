import ModalComponent from "@/components/Modal/Modal";
import { CardsProps } from "@/types/components.interface";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import ButtonComponent from "@/components/Button/Button";
import SkeletonComponent from "@/components/Skeleton/Skeleton";
import { useContext } from "react";
import { StoreContext } from "@/provider/storeProvider";
import { StoreContextProps } from "@/types/provider.interface";

export const CardComponent = ({ items }: CardsProps) => {
  const { isLoaded, handleFavorite } = useContext(
    StoreContext
  ) as StoreContextProps;

  return (
    <>
      <MagicContainer
        className={"flex flex-wrap h-[25rem] w-[20rem] flex-col gap-4"}
      >
        <MagicCard
          borderWidth={5}
          className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-[3rem] shadow-2xl"
        >
          <SkeletonComponent
            isLoaded={isLoaded}
            className="h-[45.5rem] rounded-[0.5rem]"
          >
            <img
              src={items.image}
              alt={items.name}
              className="h-[12.5rem] w-[12.5rem] rounded-[0.5rem]"
            />
          </SkeletonComponent>
          <SkeletonComponent isLoaded={isLoaded} className="rounded-[0.5rem]">
            <div className="h-[9rem] w-[13rem] p-1">
              <p className="z-10 whitespace-wrap truncate text-center text-[1.5rem] font-medium text-gray-800 dark:text-gray-200">
                {items.name}
              </p>
            </div>
          </SkeletonComponent>
          <SkeletonComponent
            isLoaded={isLoaded}
            className="mt-1 rounded-[0.5rem]"
          >
            <div className="h-[8rem]">
              <p className="z-10 whitespace-wrap text-center text-[1rem] font-medium text-gray-800 dark:text-gray-200">
                <strong>Price:</strong> ${items.price},00
              </p>
            </div>
          </SkeletonComponent>
          <div className="h-[7rem] mt-[0.2rem]">
            <SkeletonComponent isLoaded={isLoaded} className="rounded-[0.5rem]">
              <div className="flex justify-between">
                <ModalComponent items={items} />
                <ButtonComponent
                  className="border-greenPrimary text-greenPrimary p-1 ml-2"
                  radius="sm"
                  variant="bordered"
                  onPress={() => handleFavorite(items)}
                >
                  Add to Favorite
                </ButtonComponent>
              </div>
            </SkeletonComponent>
          </div>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </>
  );
};
