import { Suspense, lazy } from "react";
import NavbarComponent from "@/components/Navbar/Navbar";
import CarouselComponent from "@/components/Carousel/Carousel";
import SpinnerComponent from "@/components/Loading/Loading";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import SidebarCartComponent from "@/components/Sidebar/SidebarCart";
import FooterComponent from "@/components/Footer/Footers";
const Card = lazy(() => import("@/components/Card/Card"));
const Main = () => {
  return (
    <>
      <NavbarComponent />
      <SidebarCartComponent />
      <AnimatedGridPattern
        numSquares={1000}
        maxOpacity={0.5}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,greenPrimary,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[100rem] skew-y-12"
        )}
      />
      <CarouselComponent />
      <Suspense fallback={<SpinnerComponent />}>
        <Card />
      </Suspense>
      <FooterComponent />
    </>
  );
};

export default Main;
