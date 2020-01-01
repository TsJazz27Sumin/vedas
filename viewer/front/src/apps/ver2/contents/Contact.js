import React, { useRef, useState, useCallback, useEffect } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios'
import ContentTitle from '../../../components/ver2/Contact/ContentTitle'
import Information from '../../../components/ver2/Contact/Information'
import Privacy from '../../../components/ver2/Contact/Privacy'
import FooterLogoArea from '../../../components/ver2/Contact/FooterLogoArea'
import styled from 'styled-components';
import wordDictionaryService from '../../../services/word_dictionary'
import { isMobile } from "react-device-detect";

const Contact = (props) => {

  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/contact';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const dict = wordDictionaryService.getV2(lang);

  const [editItem, setEditItem] = useState('fullname');

  useEffect(() => {
    switch(editItem){
      case "fullName":
        inputFullNameRef.current.focus();
        break;

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

  const [complete, setComplete] = useState(false);
  const [is_compositioned, setIsCompositioned] = useState(true);

  const [fullName, setFullName] = useState('');
  const inputFullNameRef = useRef(null);
  const handleFullNameChange = useCallback((event) => {
    setFullName(event.target.value);
    setEditItem('fullName');
    console.log('fullName');
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

  const handleSubmit = useCallback(() => {
    const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'

    const data = {
      "full_name": inputFullNameRef.current.value,
      "email": inputEmailNameRef.current.value,
      "contact_information": inputContactInformationNameRef.current.value
    };
    console.log(data);
    axios.post(baseUrl + 'contact', data);
    setComplete(true);
    setEditItem('');
    window.scrollTo(0, 0);
  }, []);

  const VedasGrayBackgroundDiv = styled.div`
    background: #efefef;
  `;

  const VedasWhiteBackgroundDiv = styled.div`
    background: #fff;
  `;

  const FontFamilyMontserratLabel = styled.label`
  font-family: Montserrat;
  `;

  const FontFamilyMontserratInput = styled.input`
  font-family: Montserrat;
  `;

  let ContentArea = styled(VedasGrayBackgroundDiv)`
    height: 1400px;
    width: 91%;
    position: absolute;
    left: 4.1%;
    top: 100%;
    border-radius: 54px;
  `;

  let Content = styled(VedasWhiteBackgroundDiv)`
    position: absolute;
    width: 92%;
    height: 1000px;
    left: 4%;
    top: 8%;
    border: 1px solid #fff;
    border-radius: 16px;
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

  let FullNameInput = styled(FontFamilyMontserratInput)`
    position: absolute;
    width: 40%;
    height: 7%;
    left: 5%;
    top: 25%;
    border: 1px solid rgba(0,0,0,0.34);
    border-radius: 4px;
    font-size: 18px;
    padding: 0 0 0 2%;
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

  if (isMobile){

    ContentArea = styled(ContentArea)`
      height: 1000%;
      width: 95%;
      position: absolute;
      padding-top: 0%;
      left: 0.1%;
      right: 0.1%;
      top: 100%;
      bottom: 10.65%;
      background: none;
      border-radius: 54px;
    `;

    Content = styled(Content)`
      position: absolute;
      width: 100%;
      height: 89%;
      left: 2.4%;
      top: 8%;
      background: #fff;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 16px;
    `;

    FullNameLabel = styled(FullNameLabel)`
      height: 4%;
      top: 34%;
      font-size: 16px;
    `;

    FullNameInput = styled(FullNameInput)`
      height: 4%;
      top: 38%;
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
    <ContentArea>
      <ContentTitle/>
      <Content>
        {
          complete ? (
            <p>{dict.contact_complete}</p>
          ) : (
              <div>
                <Information dict={dict}/>
                <br/>
                <FullNameLabel>{dict.contact_item_name}</FullNameLabel>
                <FullNameInput 
                  key="key_full_name"
                  id="id_full_name"
                  type="text"
                  defaultValue={fullName}
                  onCompositionStart={() => setIsCompositioned(true)}
                  onCompositionEnd={(event) => {handleFullNameChange(event)}}
                  onChange={(event) => {if (!is_compositioned) {handleFullNameChange(event)}}}
                  onBlur={()=> {reset()}}
                  minLength="1"
                  maxLength="100"
                  placeholder={dict.contact_place_folder1}
                  ref={inputFullNameRef} 
                /> 
                <EmailLabel>{dict.contact_item_mail}</EmailLabel>
                <EmailInput 
                  key="key_email"
                  id="id_email"
                  defaultValue={email}
                  onCompositionStart={() => setIsCompositioned(true)}
                  onCompositionEnd={(event) => handleEmailChange(event)}
                  onChange={(event) => {if (!is_compositioned) {handleEmailChange(event)}}}
                  onBlur={()=> {reset()}}
                  type="email"
                  minLength="1"
                  maxLength="254"
                  placeholder={dict.contact_place_folder2}
                  ref={inputEmailNameRef} 
                  />
                <br/>
                <ContactInformationLabel>{dict.contact_item_input}</ContactInformationLabel>
                <ContactInformationTextArea 
                  key="key_contact_information"
                  id="id_contact_information"
                  defaultValue={contactInformation}
                  onCompositionStart={() => setIsCompositioned(true)}
                  onCompositionEnd={(event) => handleContactInformationChange(event)}
                  onChange={(event) => {if (!is_compositioned) {handleContactInformationChange(event)}}}
                  onBlur={()=> {reset()}}
                  onFocus={(e) => {moveCaretEnd(e)}}
                  minLength="1"
                  maxLength="1000"
                  cols="100"
                  rows="10"
                  ref={inputContactInformationNameRef} 
                  />
                <Privacy dict={dict} handleSubmit={handleSubmit}/>
              </div>
            )}
      </Content>
      <FooterLogoArea handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default Contact