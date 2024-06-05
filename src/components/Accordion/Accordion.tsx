import { Accordion, AccordionItem } from "@nextui-org/react";

export interface AccordionPros {
  children: React.ReactNode;
  key: string | number;
  title: string;
  className?: string;
}
const AccordionComponent = ({
  children,
  key,
  title,
  className,
}: AccordionPros) => {
  return (
    <Accordion className="flex flex-wrap">
      <AccordionItem key={key} title={title} className={className}>
        {children}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
