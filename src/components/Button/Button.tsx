import { ButtonProps } from "@/types/components.interface";
import { Button } from "@nextui-org/react";

const ButtonComponent = ({
  children,
  className,
  radius,
  variant,
  size,
  onPress,
}: ButtonProps) => {
  return (
    <Button
      className={className}
      radius={radius}
      variant={variant}
      size={size}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
