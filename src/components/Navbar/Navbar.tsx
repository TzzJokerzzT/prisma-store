import { useContext } from "react";
import {
  Badge,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import shoppingCarIcon from "@/assets/icons/shoppingCarIcon.svg";
import { StoreContext } from "@/provider/storeProvider";
import { StoreContextProps } from "@/types/provider.interface";
const NavbarComponent = () => {
  const { favorite, toggle } = useContext(StoreContext) as StoreContextProps;

  return (
    <Navbar>
      <NavbarContent>
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
    </Navbar>
  );
};

export default NavbarComponent;
