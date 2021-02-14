import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';


const onSubmit = async (data) => {
    try {
        await fetch('https://development.bonat.io/website/application', {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        document.querySelector('.successMsg').textContent  = 'Thank you, Bonat will contact you back as soon as possible';

    } catch(e){
        document.querySelector('.successMsg').textContent  = 'Message Could not be sent. Please try again later';
        console.log(e)
    }
}
const Popup = (props) => {

  const {
    buttonLabel,
    className
  } = props;
    const {register, handleSubmit, errors} = useForm();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div>
      <Button color="btn small orange" onClick={toggle} title="Request a Demo">اطلب التجربة</Button>
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
                                <input class="form-control pop" type="text" placeholder="الاسم بالكامل *" name="fullname" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="المدينة *" name="city"  ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="number" placeholder="رقم الجوال *" name="phone" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="business" ref={register} class="form-control pop" required>
                                    <option value="" disabled selected hidden>اسم المنشأة *</option>
                                    <option value="Coffee Shop">مقهى</option>
                                    <option value="Bakery">مخبوزات</option>
                                    <option value="Restaurant">مطعم</option>
                                    <option value="Retail">تجزئة</option>
                                    <option value="Other">أخرى</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="email" placeholder="البريد الالكتروني" name="email" ref={register}/>
                            </div>
                            <div class="form-group">
                                <select name="POS" class="form-control pop" ref={register} required>
                                    <option value="" disabled selected hidden>نوع نظام المحاسبة *</option>
                                    <option value="Foodics">فوديكس</option>
                                    <option value="Odoo">أوودو</option>
                                    <option value="Square">سكوير</option>
                                    <option value="Marn">مرن</option>
                                    <option value="Ratm">رتم</option>
                                    <option value="Omega">أوميغا</option>
                                    <option value="Other">أخرى</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="Business Name *" name="company" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="knewus" class="form-control pop" ref={register}>
                                    <option value="" disabled selected hidden>كيف سمعت عن بونات</option>
                                    <option value="Search Engine (Google, Bing…)">محرك بحث (جووجل, بينج..)</option>
                                    <option value="Social Media">التواصل الاجتماعي</option>
                                    <option value="Linked In">لينكد إن</option>
                                    <option value="Another business">من منشأة أخرى</option>
                                    <option value="Other">أخرى</option>
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