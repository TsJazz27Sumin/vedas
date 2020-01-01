import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Privacy from './Privacy'
import axios from 'axios'

const FormArea = (props) => {

  const dict = props.dict;
  const setComplete = props.setComplete;

  const [editItem, setEditItem] = useState('fullname');
  const [is_compositioned, setIsCompositioned] = useState(true);

  useEffect(() => {
    switch(editItem){
      case "email":
        inputEmailNameRef.current.focus();
        break;

      case "contactInformation":
        inputContactInformationNameRef.current.focus();
        break;

      default:
        //nothing
    }
  });

  const [fullName, setFullName] = useState('');
  const handleFullNameChange = useCallback((event) => {
    setFullName(event.target.value);
    setEditItem('fullName');
    console.log(event.target.value);
  }, []);

  const [email, setEmail] = useState('');
  const inputEmailNameRef = useRef(null);
  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
    setEditItem('email');
    console.log('email');
  }, []);

  const [contactInformation, setContactInformation] = useState('');
  const inputContactInformationNameRef = useRef(null);
  const handleContactInformationChange = useCallback((event) => {
    setContactInformation(event.target.value);
    setEditItem('contactInformation');
  }, []);

  const reset = () => {
    setEditItem('');
    setIsCompositioned(false);
  };

  const moveCaretEnd = (e) => {
    const temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  };

  const handleSubmit = useCallback((fullName) => {
    const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'

    const data = {
      "full_name": fullName,
      "email": inputEmailNameRef.current.value,
      "contact_information": inputContactInformationNameRef.current.value
    };
    console.log(data);
    // axios.post(baseUrl + 'contact', data);
    setComplete(true);
    setEditItem('');
    window.scrollTo(0, 0);
  }, []);

  const FontFamilyMontserratLabel = styled.label`
  font-family: Montserrat;
  `;

  const FontFamilyMontserratInput = styled.input`
  font-family: Montserrat;
  `;

  let FullNameLabel = styled(FontFamilyMontserratLabel)`
    position: absolute;
    width: 40%;
    height: 10%;
    left: 5%;
    top: 21%;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `; 

  let EmailLabel = styled(FontFamilyMontserratLabel)`
    position: absolute;
    width: 40%;
    height: 10%;
    left: 54%;
    top: 21%;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `; 

  let EmailInput = styled(FontFamilyMontserratInput)`
    position: absolute;
    width: 40%;
    height: 7%;
    left: 54%;
    top: 25%;
    border: 1px solid rgba(0,0,0,0.34);
    border-radius: 4px;
    font-size: 18px;
    padding: 2% 2% 2% 2%;
  `;

  let ContactInformationLabel = styled(FontFamilyMontserratLabel)`
    position: absolute;
    width: 40%;
    height: 10%;
    left: 5%;
    top: 36%;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `;

  let ContactInformationTextArea = styled.textarea`
    position: absolute;
    width: 89%;
    height: 20%;
    left: 5%;
    top: 41%;
    font-family: inherit;
    font-size   : 100%;
    line-height: 20px;
    border: 1px solid rgba(0, 0, 0, 0.34);
    border-radius: 4px;
    resize: none;
    padding: 1% 1% 1% 1%;
  `;

  if (isMobile) {

    FullNameLabel = styled(FullNameLabel)`
      height: 4%;
      top: 34%;
      font-size: 16px;
    `;

    EmailLabel = styled(EmailLabel)`
      height: 4%;
      top: 34%;
      font-size: 16px;
    `;

    EmailInput = styled(EmailInput)`
      height: 4%;
      top: 38%;
      font-size: 16px;
    `;

    ContactInformationLabel = styled(ContactInformationLabel)`
      height: 10%;
      top: 45%;
      width: 50%;
      font-size: 16px;
    `;

    ContactInformationTextArea = styled(ContactInformationTextArea)`
      height: 10%;
      top: 48%;
      font-size: 16px;
    `;
  }

  return (
    <div>
      <FullNameLabel>{dict.contact_item_name}</FullNameLabel>
      <input
        key="key_full_name"
        id="id_full_name" 
        className={isMobile ? "full-name-input-mobile" : "full-name-input" }
        type="text" 
        minLength="1"
        maxLength="100"
        placeholder={dict.contact_place_folder1}
        onChange={(event) => { handleFullNameChange(event) }}
      />
      <input
        key="key_full_name_hidden"
        id="id_full_name_hidden"
        type="hidden"
        defaultValue={fullName}
      />
      <EmailLabel>{dict.contact_item_mail}</EmailLabel>
      <EmailInput
        key="key_email"
        id="id_email"
        defaultValue={email}
        onCompositionStart={() => setIsCompositioned(true)}
        onCompositionEnd={(event) => handleEmailChange(event)}
        onChange={(event) => { if (!is_compositioned) { handleEmailChange(event) } }}
        onBlur={() => { reset() }}
        type="email"
        minLength="1"
        maxLength="254"
        placeholder={dict.contact_place_folder2}
        ref={inputEmailNameRef}
      />
      <br />
      <ContactInformationLabel>{dict.contact_item_input}</ContactInformationLabel>
      <ContactInformationTextArea
        key="key_contact_information"
        id="id_contact_information"
        defaultValue={contactInformation}
        onCompositionStart={() => setIsCompositioned(true)}
        onCompositionEnd={(event) => handleContactInformationChange(event)}
        onChange={(event) => { if (!is_compositioned) { handleContactInformationChange(event) } }}
        onBlur={() => { reset() }}
        onFocus={(e) => { moveCaretEnd(e) }}
        minLength="1"
        maxLength="1000"
        cols="100"
        rows="10"
        ref={inputContactInformationNameRef}
      />
      <Privacy dict={dict} handleSubmit={() => handleSubmit(fullName)} />
    </div>
  )
}

export default FormArea