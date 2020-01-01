import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Privacy from './Privacy'
import Information from './Information'
import axios from 'axios'

const FormArea = (props) => {

  const dict = props.dict;
  const [complete, setComplete] = useState(false);

  const [fullName, setFullName] = useState('');
  const handleFullNameChange = useCallback((event) => {
    setFullName(event.target.value);
  }, []);

  const [email, setEmail] = useState('');
  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const [contactInformation, setContactInformation] = useState('');
  const handleContactInformationChange = useCallback((event) => {
    setContactInformation(event.target.value);
  }, []);

  const addError = (target, msg) => {
    let el = document.getElementById(target)
    el.classList.add("error");
    el.value = msg;
  };

  const removeError = (target) => {
    let el = document.getElementById(target)
    el.classList.remove("error");
    el.value = "";
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = useCallback((dict, fullName, email, contactInformation) => {
    const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'

    let errCount = 0;
    if (fullName === ""){
      errCount += 1;
      addError("id_full_name", dict.error_message1);
    }

    if (!validateEmail(email)){
      errCount += 1;
      addError("id_email", dict.error_message2);
    }

    if (contactInformation === ""){
      errCount += 1;
      addError("id_contact_information", dict.error_message1);
    }

    if (errCount === 0){
      const data = {
        "full_name": fullName,
        "email": email,
        "contact_information": contactInformation
      };
      axios.post(baseUrl + 'contact', data);
      setComplete(true);
      window.scrollTo(0, 0);
    }
  }, []);

  let FullNameLabel = styled.label`
    font-family: Montserrat;
    position: absolute;
    width: 40%;
    height: 10%;
    left: 5%;
    top: 21%;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `;

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

  let ContactInformationLabel = styled.label`
    font-family: Montserrat;
    position: absolute;
    width: 40%;
    height: 10%;
    left: 5%;
    top: 36%;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `;

  let ThankYou = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    font-family: Montserrat;
    font-size: 32px;
    color: #464646;
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

    ContactInformationLabel = styled(ContactInformationLabel)`
      height: 10%;
      top: 45%;
      width: 50%;
      font-size: 16px;
    `;
  }

  return (
    <div>
      {
        complete ? (
          <ThankYou><p>{dict.contact_complete}</p></ThankYou>
        ) : (
            <div>
              <Information dict={dict} />
              <br />
              <FullNameLabel>{dict.contact_item_name}</FullNameLabel>
              <input
                key="key_full_name"
                id="id_full_name"
                className={isMobile ? "full-name-input-mobile" : "full-name-input"}
                type="text"
                minLength="1"
                maxLength="100"
                placeholder={dict.contact_place_folder1}
                onFocus={() => removeError("id_full_name")}
                onChange={(event) => { handleFullNameChange(event) }}
                required
              />
              {/* hiddenで持たせないとonchangeのたびにinputがrenderingされちゃう。 */}
              <input
                key="key_full_name_hidden"
                id="id_full_name_hidden"
                type="hidden"
                defaultValue={fullName}
              />
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
              <br />
              <ContactInformationLabel>{dict.contact_item_input}</ContactInformationLabel>
              <textarea
                key="key_contact_information"
                id="id_contact_information"
                className={isMobile ? "inquiry-input-mobile" : "inquiry-input"}
                type="text"
                minLength="1"
                maxLength="1000"
                cols="100"
                rows="10"
                onFocus={() => removeError("id_contact_information")}
                onChange={(event) => { handleContactInformationChange(event) }}
              />
              <input
                key="key_contact_information_hidden"
                id="id_contact_information_hidden"
                type="hidden"
                defaultValue={contactInformation}
              />
              <Privacy dict={dict} handleSubmit={() => handleSubmit(dict, fullName, email, contactInformation)} />
            </div>
          )}
    </div>
  )
}

export default FormArea