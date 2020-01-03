import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Privacy from './Privacy'
import Information from './Information'
import FullName from './FullName'
import Email from './Email'
import axios from 'axios'
import Inquiry from './Inquiry';

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

  const [inquiry, setInquiry] = useState('');
  const handleInquiryChange = useCallback((event) => {
    setInquiry(event.target.value);
  }, []);

  const addError = (target, msg) => {
    let element = document.getElementById(target)
    element.classList.add("error");
    element.value = msg;
  };

  const removeError = (target) => {
    let element = document.getElementById(target)
    element.classList.remove("error");
    element.value = "";
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = useCallback((dict, fullName, email, inquiry) => {
    const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'

    let errCount = 0;
    if (fullName === "") {
      errCount += 1;
      addError("id_full_name", dict.error_message1);
    }

    if (!validateEmail(email)) {
      errCount += 1;
      addError("id_email", dict.error_message2);
    }

    if (inquiry === "") {
      errCount += 1;
      addError("id_inquiry", dict.error_message1);
    }

    if (errCount === 0) {
      const data = {
        "full_name": fullName,
        "email": email,
        "inquiry": inquiry
      };
      axios.post(baseUrl + 'contact', data);
      setComplete(true);
      window.scrollTo(0, 0);
    }
  }, []);

  let ThankYou = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

    margin-top: 5%;
    margin-left: 5%;
    font-family: Montserrat;
    font-size: 32px;
    color: #464646;
  `;

  if (isMobile) {

    ThankYou = styled(ThankYou)`
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル
    
      line-height: 48px;
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
              <FullName
                dict={dict}
                fullName={fullName}
                handleFullNameChange={handleFullNameChange}
                removeError={removeError}
              />
              <Email
                dict={dict}
                email={email}
                handleEmailChange={handleEmailChange}
                removeError={removeError}
              />
              <br />
              <Inquiry
                dict={dict}
                inquiry={inquiry}
                handleInquiryChange={handleInquiryChange}
                removeError={removeError}
              />
              <Privacy dict={dict} handleSubmit={() => handleSubmit(dict, fullName, email, inquiry)} />
            </div>
          )}
    </div>
  )
}

export default FormArea