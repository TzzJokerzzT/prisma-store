import { StoreContext } from "@/provider/storeProvider";
import { StoreContextProps } from "@/types/provider.interface";
import { useContext } from "react";
import TrashCan from "@/assets/icons/trashCan";
import { Divider } from "@nextui-org/react";

const SidebarCartComponent = () => {
  const { favorite, isOpen, toggle, handleRemove } = useContext(
    StoreContext
  ) as StoreContextProps;
  return (
    <div
      className={`fixed inset-y-0 right-0  transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out overflow-auto scroll-smooth w-[20rem] bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,1),rgba(255,255,255,0.4))] shadow-xl z-50`}
    >
      <div className="p-4">
        <button className="text-greenPrimary" onClick={toggle}>
          <strong className="hover:text-blueSecondary">X</strong>
        </button>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <ul>
          {favorite.length > 0 ? (
            favorite.map((items, index) => (
              <>
                <li
                  key={index}
                  className="flex justify-around py-2 border-bluePrimary"
                >
                  <img
                    className="w-[8rem] h-[5rem] rounded-[0.4rem] "
                    src={items.image}
                    alt={`${items.name} photo`}
                  />
                  <div>
                    {items.name} - ${items.price}
                    <button onClick={() => handleRemove(items)}>
                      <TrashCan className="cursor-pointer w-[1.5rem] h-[1.5rem] fill-greenPrimary hover:fill-blueSecondary ease-in-out" />
                    </button>
                  </div>
                  <span className="text-greenPrimary">x{items.quantity}</span>
                </li>
                <Divider className="color-bluePrimary"/>
              </>
            ))
          ) : (
            <li className="text-bluePrimary font-bold ">
              Shopping Cart is Empty
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SidebarCartComponent;
