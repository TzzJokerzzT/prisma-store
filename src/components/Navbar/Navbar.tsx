import { useContext } from "react";
import { categoryData, companyData } from "@/utils/FilterData";
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
  ///Context
  const {
    favorite,
    toggle,
    category,
    setCategory,
    company,
    setCompany,
    isSelectedCategory,
    setIsSelectedCategory,
    isSelectedCompany,
    setIsSelectedCompany,
  } = useContext(StoreContext) as StoreContextProps;
  ///Handler Function
  const handleCategorySelected = (index: number) => {
    isSelectedCategory === index
      ? setIsSelectedCategory(null)
      : setIsSelectedCategory(index);
  };

  const handleCompanySelected = (index: number) => {
    isSelectedCompany === index
      ? setIsSelectedCompany(null)
      : setIsSelectedCompany(index);
  };

  const handleCategory = (items: string) => {
    items !== category ? setCategory(items) : setCategory("");
  };

  const handleCompany = (items: string) => {
    items !== company ? setCompany(items) : setCompany("");
  };

  const handleReset = () => {
    setCategory("");
    setCompany("");
    setIsSelectedCategory(null);
    setIsSelectedCompany(null);
  };

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
          {categoryData.map((items, index) => (
            <Checkbox
              key={index}
              className="flex flex-wrap w-[15rem]"
              onClick={() => handleCategory(items)}
              onValueChange={() => handleCategorySelected(index)}
              isSelected={isSelectedCategory === index}
              isDisabled={
                isSelectedCategory !== null && isSelectedCategory !== index
              }
            >
              {items}
            </Checkbox>
          ))}
        </AccordionComponent>
        <Divider />
        <AccordionComponent key="2" title="Company">
          {companyData.map((items, index) => (
            <Checkbox
              key={index}
              className="flex flex-wrap w-[10rem]"
              onClick={() => handleCompany(items)}
              onValueChange={() => handleCompanySelected(index)}
              isSelected={isSelectedCompany === index}
              isDisabled={
                isSelectedCompany !== null && isSelectedCompany !== index
              }
            >
              {items}
            </Checkbox>
          ))}
        </AccordionComponent>
        <Divider />
        <ButtonComponent
          className="border-bluePrimary text-bluePrimary p-1 ml-2 w-[5rem]"
          radius="sm"
          variant="bordered"
          onPress={handleReset}
        >
          Reset
        </ButtonComponent>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
