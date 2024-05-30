import { useContext } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Link,
} from "@nextui-org/react";
import { ModalProps } from "@/types/components.interface";
import { StoreContextProps } from "@/types/provider.interface";
import ButtonComponent from "../Button/Button";
import LazyImage from "@/lib/LazyImage";
import { StoreContext } from "@/provider/storeProvider";
import SkeletonComponent from "../Skeleton/Skeleton";

const ModalComponent = ({ items }: ModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isInView, handleFavorite } = useContext(
    StoreContext
  ) as StoreContextProps;

  return (
    <>
      <Button
        className="border-greenPrimary text-greenPrimary"
        radius="sm"
        variant="bordered"
        onPress={onOpen}
      >
        More Info
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "border-[#292f46] bg-[radial-gradient(circle_at_50%_120%,rgba(64,224,208,0.5),rgba(0,65,115,0.4))] shadow-xl",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center gap-1 text-white font-bold text-center text-[2rem]">
                {items.name.toUpperCase()}
              </ModalHeader>
              <ModalBody className="flex justify-center items-center">
                <SkeletonComponent
                  isLoaded={isInView}
                  className="h-full rounded-[0.5rem]"
                >
                  <LazyImage
                    src={items.image}
                    alt={`${items.name} picture`}
                    className="h-[20rem] w-[25rem] rounded-[0.5rem]"
                  />
                </SkeletonComponent>
              </ModalBody>
              <Divider />
              <p className="text-white ml-[1rem]">
                <strong>Price:</strong> ${items.price},00
              </p>
              <p className="text-white ml-[1rem]">
                <strong>Quantity:</strong> {items.quantity} unds
              </p>
              <p className="text-white ml-[1rem]">
                <strong>Description:</strong> {items.description}
              </p>
              <Link href={items.about.referenceURL} isExternal>
                <ButtonComponent
                  className="border-greenPrimary text-greenPrimary p-1 ml-[1rem]"
                  radius="sm"
                  variant="bordered"
                >
                  About Console
                </ButtonComponent>
              </Link>
              <ModalFooter>
                <ButtonComponent
                  className="border-greenPrimary text-white p-1 ml-2"
                  radius="sm"
                  variant="bordered"
                  onPress={onClose}
                >
                  Close
                </ButtonComponent>
                <ButtonComponent
                  className="border-greenPrimary text-white p-1 ml-2"
                  radius="sm"
                  variant="bordered"
                  onPress={() => handleFavorite(items)}
                >
                  Add to Favorite
                </ButtonComponent>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalComponent;
