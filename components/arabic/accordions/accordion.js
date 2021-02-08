import React, { useState } from 'react';
import { Data } from './data';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
   
                    <div class="faq-main-box">
                      <div class="faq-div-holder in" style={{direction: "rtl"}}>
                        <div class="faq-holder">

                            {Data.map((item, index) => {
                              return (
                                <>
                                      <div class="faq-item" onClick={() => toggle(index)} key={index}>
                                          <div class="faq-title">
                                              <h6>{item.question} </h6>
                                          </div>
                                          {clicked === index ? (
                                            <div class="faq-description">
                                                <p>{item.answer}</p>
                                            </div>
                                          ) : null}
                                      </div>
                                  
                                </>
                              );
                           })}
                           </div>

                           <div class="quick-contact" style={{marginright:"30px"}}>
                              <div class="quick-contact-holder">
                                  <div class="quick-contact-icon"><img src="../img/quick-contact.svg" alt="" /></div>
                                  <div class="quick-contact-title">
                                      <h6>Call Us anytime</h6>
                                  </div>
                                  <div class="quick-contact-des">
                                      <p>لأي أسئلة او استفسارات اخرى</p>
                                  </div>
                                  <div class="quick-contact-list">
                                      <ul>
                                          <li><a href="#" title="title">+966(5) 587-3407</a></li>
                                          <li><a href="#" title="title">+966(5) 587-3407</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>

  );
};

export default Accordion;