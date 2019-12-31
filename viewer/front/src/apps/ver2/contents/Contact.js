import React, { useRef, useState, useCallback, useEffect } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios'
import FooterLogo from '../../../components/ver2/FooterLogo'
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
  }, []);

  const [email, setEmail] = useState('');
  const inputEmailNameRef = useRef(null);
  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
    setEditItem('email');
  }, []);

  const [contactInformation, setContactInformation] = useState('');
  const inputContactInformationNameRef = useRef(null);
  const handleContactInformationChange = useCallback((event) => {
    setContactInformation(event.target.value);
    setEditItem('contactInformation');
  }, []);

  const moveCaretEnd = (e) => {
    const temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  };

  const handleSubmit = useCallback((fullName, email, contactInformation) => {
    const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'

    const data = {
      "full_name": inputFullNameRef.current.value,
      "email": inputEmailNameRef.current.value,
      "contact_information": inputContactInformationNameRef.current.value
    };
    axios.post(baseUrl + 'contact', data);
    setComplete(true);
    setEditItem('');
    window.scrollTo(0, 0);
  }, []);

  let ContentArea = styled.div`
    height: 1400px;
    width: 91%;
    position: absolute;
    padding-top: 10%;
    left: 4.1%;
    right: 4.1%;
    top: 100%;
    bottom: 10.65%;
    background: #EFEFEF;
    border-radius: 54px;
  `;

  let ContentTitle = styled.div`
    position: absolute;
    left: 5%;
    top: 3%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 200%;
    line-height: 54px;
    color: #25282B;
  `;

  let Content = styled.div`
    position: absolute;
    width: 92%;
    height: 1000px;
    left: 4%;
    top: 9%;

    background: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 16px;
  `;

  let Information = styled.div`
    position: absolute;
    width: 90%;
    height: 10%;
    left: 5%;
    top: 5%;
    color: #000;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 42px;
  `;

  let InformationP = styled.p`
    color: #4e4e4e;
  `;

  let FullNameLabel = styled.label`
    position: absolute;
    width: 40%;
    height: 10%;
    left: 5%;
    top: 21%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `; 

  let FullNameInput = styled.input`
    position: absolute;
    width: 40%;
    height: 7%;
    left: 5%;
    top: 25%;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.34);
    box-sizing: border-box;
    border-radius: 4px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    padding: 0 0 0 2%;
  `;

  let EmailLabel = styled.label`
    position: absolute;
    width: 40%;
    height: 10%;
    left: 54%;
    top: 21%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `; 

  let EmailInput = styled.input`
    position: absolute;
    width: 40%;
    height: 7%;
    left: 54%;
    top: 25%;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.34);
    box-sizing: border-box;
    border-radius: 4px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    padding: 2% 2% 2% 2%;
  `;

  let ContactInformationLabel = styled.label`
    position: absolute;
    width: 40%;
    height: 10%;
    left: 5%;
    top: 36%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
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
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18x;
    line-height: 20px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.34);
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;
    padding: 2% 2% 2% 2%;
  `;

  let Privacy = styled.div`
    position: absolute;
    width: 90%;
    height: 10%;
    left: 5%;
    top: 65%
    line-height: 22px;
    color: #000;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
  `;

  let PrivacyAccept = styled.button`
    position: absolute;
    width: 36%;
    height: 9%;
    left: 32%;
    top: 85%;
    background: #0084FF;
    border-radius: 4px;
  `;

  let PrivacyAcceptP = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    color: #fff;
  `;

  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    top: 88%;
  `;

  const Title = (
    <svg width="159" height="24" viewBox="0 0 159 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.376 23.32C10.1147 23.32 8.06667 22.8293 6.232 21.848C4.41867 20.8453 2.98933 19.4693 1.944 17.72C0.92 15.9707 0.408 13.9973 0.408 11.8C0.408 9.60267 0.930667 7.62933 1.976 5.88C3.02133 4.13067 4.45067 2.76533 6.264 1.784C8.09867 0.781332 10.1467 0.279999 12.408 0.279999C14.2427 0.279999 15.9173 0.599999 17.432 1.24C18.9467 1.88 20.2267 2.808 21.272 4.024L18.584 6.552C16.9627 4.80267 14.968 3.928 12.6 3.928C11.064 3.928 9.688 4.26933 8.472 4.952C7.256 5.61333 6.30667 6.54133 5.624 7.736C4.94133 8.93067 4.6 10.2853 4.6 11.8C4.6 13.3147 4.94133 14.6693 5.624 15.864C6.30667 17.0587 7.256 17.9973 8.472 18.68C9.688 19.3413 11.064 19.672 12.6 19.672C14.968 19.672 16.9627 18.7867 18.584 17.016L21.272 19.576C20.2267 20.792 18.936 21.72 17.4 22.36C15.8853 23 14.2107 23.32 12.376 23.32ZM35.2533 23.32C32.9706 23.32 30.9119 22.8293 29.0773 21.848C27.2426 20.8453 25.8026 19.4693 24.7573 17.72C23.7119 15.9493 23.1893 13.976 23.1893 11.8C23.1893 9.624 23.7119 7.66133 24.7573 5.912C25.8026 4.14133 27.2426 2.76533 29.0773 1.784C30.9119 0.781332 32.9706 0.279999 35.2533 0.279999C37.5359 0.279999 39.5946 0.781332 41.4293 1.784C43.2639 2.76533 44.7039 4.13067 45.7493 5.88C46.7946 7.62933 47.3173 9.60267 47.3173 11.8C47.3173 13.9973 46.7946 15.9707 45.7493 17.72C44.7039 19.4693 43.2639 20.8453 41.4293 21.848C39.5946 22.8293 37.5359 23.32 35.2533 23.32ZM35.2533 19.672C36.7466 19.672 38.0906 19.3413 39.2853 18.68C40.4799 17.9973 41.4186 17.0587 42.1013 15.864C42.7839 14.648 43.1253 13.2933 43.1253 11.8C43.1253 10.3067 42.7839 8.96267 42.1013 7.768C41.4186 6.552 40.4799 5.61333 39.2853 4.952C38.0906 4.26933 36.7466 3.928 35.2533 3.928C33.7599 3.928 32.4159 4.26933 31.2213 4.952C30.0266 5.61333 29.0879 6.552 28.4053 7.768C27.7226 8.96267 27.3813 10.3067 27.3813 11.8C27.3813 13.2933 27.7226 14.648 28.4053 15.864C29.0879 17.0587 30.0266 17.9973 31.2213 18.68C32.4159 19.3413 33.7599 19.672 35.2533 19.672ZM71.6308 0.599998V23H68.2068L55.8548 7.832V23H51.7268V0.599998H55.1508L67.5028 15.768V0.599998H71.6308ZM82.177 4.12H74.753V0.599998H93.761V4.12H86.337V23H82.177V4.12ZM110.286 17.816H99.086L96.878 23H92.59L102.67 0.599998H106.766L116.878 23H112.526L110.286 17.816ZM108.91 14.552L104.686 4.76L100.494 14.552H108.91ZM129.782 23.32C127.521 23.32 125.473 22.8293 123.638 21.848C121.825 20.8453 120.396 19.4693 119.35 17.72C118.326 15.9707 117.814 13.9973 117.814 11.8C117.814 9.60267 118.337 7.62933 119.382 5.88C120.428 4.13067 121.857 2.76533 123.67 1.784C125.505 0.781332 127.553 0.279999 129.814 0.279999C131.649 0.279999 133.324 0.599999 134.838 1.24C136.353 1.88 137.633 2.808 138.678 4.024L135.99 6.552C134.369 4.80267 132.374 3.928 130.006 3.928C128.47 3.928 127.094 4.26933 125.878 4.952C124.662 5.61333 123.713 6.54133 123.03 7.736C122.348 8.93067 122.006 10.2853 122.006 11.8C122.006 13.3147 122.348 14.6693 123.03 15.864C123.713 17.0587 124.662 17.9973 125.878 18.68C127.094 19.3413 128.47 19.672 130.006 19.672C132.374 19.672 134.369 18.7867 135.99 17.016L138.678 19.576C137.633 20.792 136.342 21.72 134.806 22.36C133.292 23 131.617 23.32 129.782 23.32ZM146.958 4.12H139.534V0.599998H158.542V4.12H151.118V23H146.958V4.12Z" fill="#25282B" />
    </svg>
  );

  if (isMobile){

    ContentArea = styled(ContentArea)`
      height: 1000%;
      width: 91%;
      position: absolute;
      padding-top: 0%;
      left: 4.1%;
      right: 4.1%;
      top: 100%;
      bottom: 10.65%;
      background: #EFEFEF;
      border-radius: 54px;
    `;

    ContentTitle = styled(ContentTitle)`
      top: 2%;
      padding-left: 23%;
    `;

    Content = styled(Content)`
      position: absolute;
      width: 93%;
      height: 89%;
      left: 14px;
      top: 8%;
      background: #fff;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 16px;
    `;

    Information = styled(Information)`
      line-height: 32px;
    `;

    FullNameLabel = styled(FullNameLabel)`
      height: 4%;
      top: 34%;
    `;

    FullNameInput = styled(FullNameInput)`
      height: 4%;
      top: 38%;
    `;

    EmailLabel = styled(EmailLabel)`
      height: 4%;
      top: 34%;
    `;

    EmailInput = styled(EmailInput)`
      height: 4%;
      top: 38%;
    `;

    ContactInformationLabel = styled(ContactInformationLabel)`
      height: 10%;
      top: 45%;
    `;

    ContactInformationTextArea = styled(ContactInformationTextArea)`
      height: 10%;
      top: 48%;
    `;

    Privacy = styled(Privacy)`
      height: 10%;
      top: 63%;
    `;

    PrivacyAccept = styled(PrivacyAccept)`
      width: 60%;
      height: 7%;
      left: 20%;
      top: 86%;
    `;

    LogoArea = styled(LogoArea)`
      height: 10%;
      top: 77%;
    `;
  }

  return (
    <ContentArea>
      <ContentTitle>{Title}</ContentTitle>
      <Content>
        {
          complete ? (
            <p>{dict.contact_complete}</p>
          ) : (
              <div>
                <Information>
                  <p>{dict.contact_text1}</p>
                  <p>{dict.contact_text2}</p>
                  <InformationP>{dict.contact_note}</InformationP>
                </Information>
                <br/>
                <FullNameLabel>{dict.contact_item_name}</FullNameLabel>
                <FullNameInput 
                  key="key_full_name"
                  id="id_full_name"
                  type="text"
                  defaultValue={fullName}
                  onCompositionStart={() => setIsCompositioned(true)}
                  onCompositionEnd={(event) => handleFullNameChange(event)}
                  onChange={(event) => {if (!is_compositioned) {handleFullNameChange(event)}}}
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
                  type="text"
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
                  onFocus={(e) => {moveCaretEnd(e)}}
                  minLength="1"
                  maxLength="1000"
                  cols="100"
                  rows="10"
                  ref={inputContactInformationNameRef} 
                  />
                <Privacy>
                <p>
                  {dict.contact_text3}
                </p>
                <br/>
                <p>
                  {dict.contact_text4}
                  <a
                    href="https://corp.panair.jp/privacy_short"
                    external="true"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {dict.contact_text5}
                  </a>
                  {dict.contact_text6}
                </p>
                <p>
                  {dict.contact_text7}
                </p>
                </Privacy>
                <br/>
                <PrivacyAccept
                  onClick={() => handleSubmit(fullName, email, contactInformation)}>
                  <PrivacyAcceptP>{dict.contact_submit}</PrivacyAcceptP>
                </PrivacyAccept>
                <br/>
              </div>
            )}
      </Content>
      <FooterLogo LogoArea={LogoArea} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default Contact