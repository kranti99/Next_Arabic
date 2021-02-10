import React, { useState } from 'react';


const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
      <div className="faq-item"  onClick={() => setOpen(!isOpen)}>
        
        <div
          className={`faq-title ${isOpen ? "open" : ""}`}
        
          >
          {title}
        </div>
        <div className={`accordion-item faq-description ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
  
  
export default Accordion;