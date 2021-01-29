import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';


import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
{/* <style jsx>{`
p {
  color: blue;
}
div {
  background: red;
}
@media (max-width: 600px) {
  div {
    background: blue;
  }
}
`}</style> */}

const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 70vh;
background: #fff;
`;

const Container = styled.div`
position: absolute;
top: 30%;
box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
background: #fff;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;
h1 {
  padding: 2rem;
  font-size: 2rem;
}
span {
  margin-right: 1.5rem;
}
box-shadow: 0px 20px 40px #03004D0A;
`;

const Dropdown = styled.div`
background: #eee;
color: #00ffb9;
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p {
  font-size: 2rem;
}
`;

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
  <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
    <AccordionSection>
      <Container>
        {Data.map((item, index) => {
          return (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h1>{item.question}</h1>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}
            </>
          );
        })}
      </Container>
    </AccordionSection>
  </IconContext.Provider>
);
};

export default Accordion;