import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';

const Inquiry = (props) => {

  const dict = props.dict;
  const inquiry = props.inquiry;
  const handleInquiryChange = props.handleInquiryChange;
  const removeError = props.removeError;

  const StyledComponents = getStyledComponents();
  const InquiryLabel = StyledComponents.InquiryLabel;

  return (
    <div className="inquiry">
      <InquiryLabel>{dict.contact_item_input}</InquiryLabel>
      <textarea
        key="key_inquiry"
        id="id_inquiry"
        className={isMobile ? "inquiry-input-mobile" : "inquiry-input"}
        type="text"
        minLength="1"
        maxLength="1000"
        cols="100"
        rows="10"
        onFocus={() => removeError("id_inquiry")}
        onChange={(event) => { handleInquiryChange(event) }}
      />
      <input
        key="key_inquiry_hidden"
        id="id_inquiry_hidden"
        type="hidden"
        defaultValue={inquiry}
      />
    </div>
  )
}

const getStyledComponents = () => {

  let InquiryLabel = styled.label`
  font-family: Montserrat;
  font-size: 18px;
  color: ${Color.lightGray};

  width: 40%;
  height: 10%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 36%;
  left: 5%;
  right: 0%;
  bottom: 0%;
  
  line-height: 20px;
  `;

  if (isMobile) {
    InquiryLabel = styled(InquiryLabel)`
    font-size: 16px;

    height: 10%;
    width: 50%;

    top: 45%;
    `;
  }

  return {
    InquiryLabel : InquiryLabel
  };
}

export default Inquiry