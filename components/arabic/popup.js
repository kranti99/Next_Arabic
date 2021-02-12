import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Popup = (props) => {

  const {
    buttonLabel,
    className
  } = props;
    const {register, handleSubmit, errors} = useForm();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const onSubmit =  (data)  => {
      document.querySelector('.successMsg').textContent  = 'Thank you, Bonat will contact you back as soon as possible';

      axios
      .post('https://www.postman.com/collections/c7d197a4f68c3690e2b1', JSON.stringify(data))
      .then(response => {
      })
      .catch(error=> {
      })
  }

  return (
    <div>
      <Button color="btn small orange" onClick={toggle} title="Request a Demo">Request a Demo</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
        </ModalHeader>
        <ModalBody>
            <section class="popup-section" style={{direction:"rtl"}}>
              <div class="popup-section-header">
                  <div class="popup-section-logo">
                      <img src="img/logo.svg" alt=""/>
                  </div>
              </div>
              <div class="popup-section-box">
                  <div class="popup-section-title">
                      <div class="title">
                          <h3>اطّلع على مميزات بونات</h3>
                      </div>
                  </div>
                  <div class="popup-section-formbox">
                      <div class="successMsg"></div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <div class="popup-section-form">
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="الاسم بالكامل *" name="full_name" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="المدينة *" name="city"  ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="number" placeholder="رقم الجوال *" name="mobile_nu" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="business_type" ref={register} class="form-control pop" required>
                                    <option value="" disabled selected hidden>اسم المنشأة *</option>
                                    <option value="Coffee Shop">Coffee Shop</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="email" placeholder="البريد الالكتروني" name="email" ref={register}/>
                            </div>
                            <div class="form-group">
                                <select name="pos_type" class="form-control pop" ref={register} required>
                                    <option value="" disabled selected hidden>نوع نظام المحاسبة *</option>
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
                                <input class="form-control pop" type="text" placeholder="Business Name *" name="business_name" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="know_how" class="form-control pop" ref={register}>
                                    <option value="" disabled selected hidden>كيف سمعت عن بونات</option>
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
                                ارسال   
                                </button>
                                <div class="popup-section-information">
                                    <div class="info-text">
                                        <span>لا تتردد في التواصل معنا اذا كانت لديك أي اسئلة</span>
                                    </div>
                                    <a class="info-btn" href="#">
                                        <img src="img/whatsapp.svg" alt=""/>
                                        <span class="text">تواصل معنا</span>
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