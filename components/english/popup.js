import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import fetch from "isomorphic-fetch";




// const postData = async (data) => {
//     try {
//         await fetch('https://development.bonat.io/website/application', {
//             method: 'post',
//             mode: 'no-cors',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         });
//         document.querySelector('.successMsg').textContent  = 'Thank you, Bonat will contact you back as soon as possible';
//     } catch(e){
//         console.log(e);
//         document.querySelector('.successMsg').textContent  = 'Message Could not be sent. Please try again later';
//     }
   
// }





const Popup = (props) => {

  const {
    buttonLabel,
    className
  } = props;
    const {register, handleSubmit, errors} = useForm();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [res, setRes] = React.useState({ success: false, error: null });
  const postData = async (data) => {
    alert( JSON.stringify(data) )
    // e.preventDefault();
    try {
      await fetch("https://development.bonat.io/website/application", {
        method: "POST",
        mode: 'no-cors',

        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      setRes({ error: null, success: true });
      document.querySelector('.successMsg').textContent  = 'Thank you, Bonat will contact you back as soon as possible';

    } catch (e) {
      setRes({ error: true, success: false });
      console.log(e);
      document.querySelector('.successMsg').textContent  = 'Message Could not be sent. Please try again later';
    }
  };

  return (
    <div>
      <Button color="btn small orange" onClick={toggle} title="Request a Demo">Request a Demo</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
        </ModalHeader>
        <ModalBody>
          <section class="popup-section">
              <div class="popup-section-header">
                  <div class="popup-section-logo">
                      <img src="img/logo.svg" alt=""/>
                  </div>
              </div>
              <div class="popup-section-box">
                  <div class="popup-section-title">
                      <div class="title">
                          <h3>See the features in Action</h3>
                      </div>
                  </div>
                  <div class="popup-section-formbox">
                      <div class="successMsg"></div>
                      <form onSubmit={handleSubmit(postData)}>
                          <div class="popup-section-form">
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="Full Name *" name="fullname" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="City *" name="city"  ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="number" placeholder="Mobile No *" name="phone" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="business" ref={register} class="form-control pop" required>
                                    <option value="" disabled selected hidden>Business Type *</option>
                                    <option value="Coffee Shop">Coffee Shop</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="email" placeholder="Email" name="email" ref={register}/>
                            </div>
                            <div class="form-group">
                                <select name="POS" class="form-control pop" ref={register} required>
                                    <option value="" disabled selected hidden>POS Type *</option>
                                    <option value="Foodics">Foodics</option>
                                    <option value="Odoo">Odoo</option>
                                    <option value="Square">Square</option>
                                    <option value="Marn">Marn</option>
                                    <option value="Ratm">Ratm</option>
                                    <option value="Omega">Omega</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="Business Name *" name="company" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="knewus" class="form-control pop" ref={register}>
                                    <option value="" disabled selected hidden>How did you know about Bonat</option>
                                    <option value="Search Engine (Google, Bing…)">Search Engine (Google, Bing…)</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Linked In">Linked In</option>
                                    <option value="Another business">Another business</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                            <div class="popup-section-submit">
                                <button class="btn orange" type="submit">
                                    Submit
                                </button>
                                <div class="popup-section-information">
                                    <div class="info-text">
                                        <span>Don’t hesitate to contact us if you have any questions</span>
                                    </div>
                                    <a class="info-btn" href="#">
                                        <img src="img/whatsapp.svg" alt=""/>
                                        <span class="text">Contact Us</span>
                                    </a>
                                </div>
                            </div>
                        
                      </form>
                  </div>
                 
              </div> 
          </section>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;