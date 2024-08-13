import AccordionItem from "./AccordionItem";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <AccordionItem
            id="experience"
            title="We got 20 years of experience"
            className="accordion-item"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized vation
                trips for more than 20 years
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="local-guides"
            title="We're working with local guides"
            className="accordion-item"
          >
            <article>
              <p>We are not doing this along from our office</p>
              <p>
                Instead, we are working with local guides to ensure a safe and
                pleasent vacation
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
