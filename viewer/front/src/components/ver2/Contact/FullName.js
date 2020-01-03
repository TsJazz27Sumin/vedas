import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const FullName = (props) => {

  const dict = props.dict;
  const fullName = props.fullName;
  const handleFullNameChange = props.handleFullNameChange;
  const removeError = props.removeError;

  let FullNameLabel = styled.label`
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
    top: 21%;
    font-size: 18px;
    line-height: 20px;
    color: #464646;
  `;

  if (isMobile) {
    FullNameLabel = styled(FullNameLabel)`
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
    
      height: 4%;
      top: 34%;
      font-size: 16px;
    `;
  }

  return (
    <div>
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
    </div>
  )
}

export default FullName