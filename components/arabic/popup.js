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
      <Button color="btn small orange" onClick={toggle} title="التجربة">التجربة</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Request A Demo</ModalHeader>
        <ModalBody>
            <div class="contact-form-item">
                <form class="contact-form-holder" action="">
                    <div class="form-group"><input class="form-control" type="text" placeholder="Full Name"
                            onfocus="this.placeholder=''" onblur="this.placeholder='Full Name'" /></div>
                    <div class="form-group"><input class="form-control" type="email" placeholder="Email"
                            onfocus="this.placeholder=''" onblur="this.placeholder='Email'" /></div>
                    <div class="form-group col2"><input class="form-control" type="text" placeholder="Mobile No"
                            onfocus="this.placeholder=''" onblur="this.placeholder='Mobile No'" /></div>
                    <div class="form-group col2"><textarea class="form-control" rows="7"
                            placeholder="Message Details" onfocus="this.placeholder=''"
                            onblur="this.placeholder='Message Details'"></textarea></div>
                    <div class="form-group col2 btn-holder"><button class="btn orange" type="submit">Send
                            Now</button></div>
                </form>
            </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;