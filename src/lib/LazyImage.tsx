import SkeletonComponent from "@/components/Skeleton/Skeleton";
import { StoreContext } from "@/provider/storeProvider";
import { LazyImageProps } from "@/types/components.interface";
import { StoreContextProps } from "@/types/provider.interface";
import { useEffect, useRef, useContext } from "react";

const LazyImage = ({ src, alt, className, ...props }: LazyImageProps) => {
  const { isInView, setIsInView } = useContext(
    StoreContext
  ) as StoreContextProps;
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : ""}
      alt={alt}
      className={className}
      {...props}
      //   style={{ opacity: isInView ? 1 : 0, transition: 'opacity 0.3s' }}
    />
  );
};

export default LazyImage;
