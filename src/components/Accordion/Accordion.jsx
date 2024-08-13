import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AccordionContext = createContext();

export function UseAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>."
    );
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenId] = useState();

  function openItem(id) {
    setOpenId(id);
  }

  function closeItem() {
    setOpenId(null);
  }

  const contextValue = {
    openItemId,
    closeItem,
    openItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>;
    </AccordionContext.Provider>
  );
}
