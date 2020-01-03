import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Information = (props) => {

  const dict = props.dict;

  let Information = styled.div`
  font-family: Roboto;
  font-size: 18px;
  
  width: 90%;
  height: 10%;
  
  position: absolute;
  top: 5%;
  left: 5%;
  
  line-height: 42px;
  `;

  let InformationP = styled.p`
  color: #4e4e4e;
  `;

  if (isMobile) {
    Information = styled(Information)`
    font-size: 16px;

    line-height: 32px;
    `;
  }


  return (
    <Information>
      <p>{dict.contact_text1}</p>
      <p>{dict.contact_text2}</p>
      <InformationP>{dict.contact_note}</InformationP>
    </Information>
  )
}

export default Information