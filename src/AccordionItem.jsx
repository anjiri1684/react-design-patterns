import { UseAccordionContext } from "./components/Accordion/Accordion";

export default function AccordionItem({ title, children, className, id }) {
  const { openItemId, openItem, closeItem } = UseAccordionContext();

  const isOpen = openItemId === id;

  function hanldeClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li className={className}>
      <h3 onClick={hanldeClick}>{title}</h3>
      <div
        className={
          isOpen ? " accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
