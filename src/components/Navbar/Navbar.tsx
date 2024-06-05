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
const NavbarComponent = () => {
  const { category, company, favorite, toggle } = useContext(
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
        <AccordionComponent key="1" title="Category">
          {category.map((items) => (
            <Checkbox className="flex flex-wrap w-[30rem]">{items}</Checkbox>
          ))}
        </AccordionComponent>
        <Divider />
        <AccordionComponent key="1" title="Company" className="text-greenPrimary">
          {company.map((items) => (
            <Checkbox className="flex flex-wrap w-[30rem]">{items}</Checkbox>
          ))}
        </AccordionComponent>
        <Divider />
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
