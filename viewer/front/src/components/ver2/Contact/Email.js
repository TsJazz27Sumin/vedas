import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Email = (props) => {

  const dict = props.dict;
  const email = props.email;
  const handleEmailChange = props.handleEmailChange;
  const removeError = props.removeError;

  let EmailLabel = styled.label`
    font-family: Montserrat;
    position: absolute;
    width: 40%;
    height: 10%;
    left: 54%;
    top: 21%;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `;

  if (isMobile) {
    EmailLabel = styled(EmailLabel)`
      height: 4%;
      top: 34%;
      font-size: 16px;
    `;
  }

  return (
    <div>
      <EmailLabel>{dict.contact_item_mail}</EmailLabel>
      <input
        key="key_email"
        id="id_email"
        className={isMobile ? "email-input-mobile" : "email-input"}
        type="email"
        minLength="1"
        maxLength="254"
        placeholder={dict.contact_place_folder2}
        onFocus={() => removeError("id_email")}
        onChange={(event) => { handleEmailChange(event) }}
      />
      <input
        key="key_email_hidden"
        id="id_email_hidden"
        type="hidden"
        defaultValue={email}
      />
    </div>
  )
}

export default Email