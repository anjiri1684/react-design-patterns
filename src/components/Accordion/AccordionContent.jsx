import { UseAccordionItem } from "../../AccordionItem";
import { UseAccordionContext } from "./Accordion";

export default function AccordionContent({ children, className }) {
  const { openItemId } = UseAccordionContext();
  const id = UseAccordionItem();

  const isOpen = id === openItemId;

  return (
    <div className={`${className ?? ""} ${isOpen ? "open" : "close"}`}>
      {children}
    </div>
  );
}
