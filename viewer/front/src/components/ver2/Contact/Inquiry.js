import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Inquiry = (props) => {

  const dict = props.dict;
  const inquiry = props.inquiry;
  const handleInquiryChange = props.handleInquiryChange;
  const removeError = props.removeError;

  let InquiryLabel = styled.label`
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

  if (isMobile) {
    InquiryLabel = styled(InquiryLabel)`
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
    
      height: 10%;
      top: 45%;
      width: 50%;
      font-size: 16px;
    `;
  }

  return (
    <div>
      <InquiryLabel>{dict.contact_item_input}</InquiryLabel>
      <textarea
        key="key_inquiry_information"
        id="id_inquiry_information"
        className={isMobile ? "inquiry-input-mobile" : "inquiry-input"}
        type="text"
        minLength="1"
        maxLength="1000"
        cols="100"
        rows="10"
        onFocus={() => removeError("id_inquiry_information")}
        onChange={(event) => { handleInquiryChange(event) }}
      />
      <input
        key="key_inquiry_information_hidden"
        id="id_inquiry_information_hidden"
        type="hidden"
        defaultValue={inquiry}
      />
    </div>
  )
}

export default Inquiry