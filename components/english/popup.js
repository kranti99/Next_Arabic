import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="btn small orange" onClick={toggle} title="Request a Demo">Request a Demo</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <section class="popup-section" style={{margin:"30px"}}>
                <div class="popup-section-header">
                    <div class="popup-section-logo">
                        <img src="img/logo.svg" alt=""/>
                    </div>
                    <div class="popup-section-closetrigger" id="popclose">

                    </div>
                </div>
                <div class="popup-section-box">
                    <div class="popup-section-title">
                        <div class="title">
                            <h3>Get to watch the features in action</h3>
                        </div>
                    </div>
                    <div class="popup-section-formbox">
                        <form class="popup-section-form" action="">
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* Full Name"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* Work Field"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* Mobile No"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* أدخل مجال العمل (في حال اختيار اخرى)"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* Email"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="*POS Type"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* Company"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* How did you know about Bonat"/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="* City"/>
                            </div>
                        </form>
                    </div>
                    <div class="popup-section-submit">
                        <button class="btn orange" type="submit">
                            Submit
                        </button>
                        <div class="popup-section-information">
                            <div class="info-text">
                                <span>اذا واجهتك مشكلة, لا تترد في التواصل معنا مباشرة</span>
                            </div>
                            <a class="info-btn" href="#">
                                <img src="img/whatsapp.svg" alt=""/>
                                <span class="text">تواصل معنا</span>
                            </a>
                        </div>
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

export default ModalExample;