import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const FullName = (props) => {

  const dict = props.dict;
  const fullName = props.fullName;
  const handleFullNameChange = props.handleFullNameChange;
  const removeError = props.removeError;

  let FullNameLabel = styled.label`
  font-family: Montserrat;
  font-size: 18px;
  color: #464646;

  width: 40%;
  height: 10%;
  
  position: absolute;
  top: 21%;
  left: 5%;
  
  line-height: 20px;
  `;

  if (isMobile) {
    FullNameLabel = styled(FullNameLabel)`
    font-size: 16px;

    height: 4%;
    
    top: 34%;
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