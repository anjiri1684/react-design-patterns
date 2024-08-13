import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function UseAccordionItem() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem must be used within an AccordionItemProvider"
    );
  }

  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider>
      <li className={className}>{children}</li>;
    </AccordionItemContext.Provider>
  );
}
