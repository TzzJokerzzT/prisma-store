import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const CarouselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex h-[15rem]">
        <div className="flex-[0_0_100%] min-w-0 ">Slide 1</div>
        <div className="flex-[0_0_100%] min-w-0">Slide 2</div>
        <div className="flex-[0_0_100%] min-w-0">Slide 3</div>
      </div>
    </div>
  );
};

export default CarouselComponent;
