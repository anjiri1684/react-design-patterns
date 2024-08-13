import { UseAccordionItem } from "../../AccordionItem";
import { UseAccordionContext } from "./Accordion";

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = UseAccordionContext();
  const id = UseAccordionItem();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
