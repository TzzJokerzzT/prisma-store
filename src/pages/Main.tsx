import { Suspense, lazy, useContext } from "react";
import NavbarComponent from "@/components/Navbar/Navbar";
import CarouselComponent from "@/components/Carousel/Carousel";
import SpinnerComponent from "@/components/Loading/Loading";
import SidebarCartComponent from "@/components/Sidebar/SidebarCart";
import FooterComponent from "@/components/Footer/Footers";
import { StoreContext } from "@/provider/storeProvider";
import { StoreContextProps } from "@/types/provider.interface";
import ErrorComponent from "@/components/Error/Error";
const Card = lazy(() => import("@/components/Card/Card"));
const Main = () => {
  const { showError } = useContext(StoreContext) as StoreContextProps;
  return (
    <>
      <NavbarComponent />
      <SidebarCartComponent />
      <CarouselComponent />
      {showError ? (
        <ErrorComponent />
      ) : (
        <Suspense fallback={<SpinnerComponent />}>
          <Card />
        </Suspense>
      )}
      <FooterComponent />
    </>
  );
};

export default Main;
