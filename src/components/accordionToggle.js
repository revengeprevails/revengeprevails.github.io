import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function AccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      className="accordionToggle"
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default AccordionToggle