import { SkeletonProps } from "@/types/components.interface";
import { Skeleton } from "@nextui-org/react";

const SkeletonComponent = ({
  children,
  isLoaded,
  className,
}: SkeletonProps) => {
  return (
    <Skeleton isLoaded={isLoaded} className={className}>
      {children}
    </Skeleton>
  );
};

export default SkeletonComponent;
