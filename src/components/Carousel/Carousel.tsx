import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const CarouselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.slideNodes();
    }
  }, [emblaApi]);
  return (
    <div
      className="overflow-hidden m-2 rounded-[0.5rem] border border-[#004173]"
      ref={emblaRef}
    >
      <div className="flex h-[15rem]">
        <div className="flex-[0_0_100%] min-w-0 ">
          <a
            className="relative flex"
            href="https://www.ign.com/articles/gears-6-devs-promise-return-to-horror-from-the-original-games"
            target="_blank"
          >
            <img
              className="w-screen h-[20rem]"
              src="https://assets-prd.ignimgs.com/2024/06/10/gears-of-wars-e-day-1718051123418.png"
            />
            <h1 className="absolute w-full top-[9rem] text-white text-[5rem] bg-gradient-to-t from-bluePrimary shadow-xl">
              Gear of War 6 Trailer
            </h1>
          </a>
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <a
            className="relative flex"
            href="https://www.ign.com/articles/call-of-duty-black-ops-6-isnt-300-gb-after-all"
            target="_blank"
          >
            <img
              className="w-screen h-[20rem]"
              src="https://assets-prd.ignimgs.com/2024/06/09/call-of-duty-black-ops-6-1717943259180.jpg"
            />
            <h1 className="absolute w-full top-[9rem] text-white text-[5rem] bg-gradient-to-t from-bluePrimary shadow-xl">
              Call of Duty: Black Ops 6 Isn't 300 GB After All
            </h1>
          </a>
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <a
            className="relative flex"
            href="https://www.ign.com/articles/xbox-just-had-its-best-showcase-ever-and-at-the-perfect-time"
            target="_blank"
          >
            <img
              className="w-screen h-[20rem]"
              src="https://assets-prd.ignimgs.com/2024/06/10/pd-1718056690583.jfif"
            />
            <h1 className="absolute w-full top-[9rem] text-white text-[5rem] bg-gradient-to-t from-bluePrimary shadow-xl">
              Xbox Just Had its Best Showcase Ever
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
