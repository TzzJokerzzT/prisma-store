import { AccordionProps } from "@/types/components.interface";
import { Accordion, AccordionItem } from "@nextui-org/react";


const AccordionComponent = ({
  children,
  key,
  title,
  className,
}: AccordionProps) => {
  return (
    <Accordion className="flex flex-wrap">
      <AccordionItem key={key} title={title} className={className}>
        {children}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
