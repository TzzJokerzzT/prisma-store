import { Suspense, lazy } from "react";
import NavbarComponent from "@/components/Navbar/Navbar";
import CarouselComponent from "@/components/Carousel/Carousel";
import SpinnerComponent from "@/components/Loading/Loading";
import SidebarCartComponent from "@/components/Sidebar/SidebarCart";
import FooterComponent from "@/components/Footer/Footers";
const Card = lazy(() => import("@/components/Card/Card"));
const Main = () => {
  return (
    <>
      <NavbarComponent />
      <SidebarCartComponent />
      <CarouselComponent />
      <Suspense fallback={<SpinnerComponent />}>
        <Card />
      </Suspense>
      <FooterComponent />
    </>
  );
};

export default Main;
