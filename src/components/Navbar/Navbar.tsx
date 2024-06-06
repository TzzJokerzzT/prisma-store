import { useContext } from "react";
import {
  Badge,
  Checkbox,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import shoppingCarIcon from "@/assets/icons/shoppingCarIcon.svg";
import { StoreContext } from "@/provider/storeProvider";
import { StoreContextProps } from "@/types/provider.interface";
import AccordionComponent from "@/components/Accordion/Accordion";
import ButtonComponent from "../Button/Button";
const NavbarComponent = () => {
  const { favorite, toggle, onCategory, onCompany, onReset } = useContext(
    StoreContext
  ) as StoreContextProps;

  return (
    <Navbar isBordered isBlurred>
      <NavbarContent>
        <NavbarMenuToggle />
        <NavbarBrand>
          <p className="font-bold text-inherit">Prisma Store</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Badge
            content={favorite.length}
            variant="faded"
            className="border-greenPrimary"
            size="sm"
          >
            <img
              className="cursor-pointer"
              src={shoppingCarIcon}
              alt="Shopping Cart Icon"
              onClick={toggle}
            />
          </Badge>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex"></NavbarItem>
      </NavbarContent>
      <NavbarMenu className="w-[20rem]">
        <AccordionComponent title="Category">
          <Checkbox
            onClick={() => onCategory("Classic Console")}
            className="flex flex-wrap w-[11rem]"
          >
            Classic Console
          </Checkbox>
          <Checkbox
            onClick={() => onCategory("Console")}
            className="flex flex-wrap w-[7rem]"
          >
            Console
          </Checkbox>
          <Checkbox
            onClick={() => onCategory("Classic Portable Console")}
            className="flex flex-wrap w-[15rem]"
          >
            Classic Portable Console
          </Checkbox>
          <Checkbox
            onClick={() => onCategory("Portable Console")}
            className="flex flex-wrap w-[11rem]"
          >
            Portable Console
          </Checkbox>
        </AccordionComponent>
        <Divider />
        <AccordionComponent key="2" title="Company">
          <Checkbox
            onClick={() => onCompany("Sony")}
            className="flex flex-wrap w-[10rem]"
          >
            Sony
          </Checkbox>
          <Checkbox
            onClick={() => onCompany("Microsoft")}
            className="flex flex-wrap w-[10rem]"
          >
            Microsoft
          </Checkbox>
          <Checkbox
            onClick={() => onCompany("Nintendo")}
            className="flex flex-wrap w-[10rem]"
          >
            Nintendo
          </Checkbox>
        </AccordionComponent>
        <Divider />
        <ButtonComponent
          className="border-bluePrimary text-bluePrimary p-1 ml-2 w-[5rem]"
          radius="sm"
          variant="bordered"
          onPress={onReset}
        >
          Reset
        </ButtonComponent>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
