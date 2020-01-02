import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Information = (props) => {

  const dict = props.dict;

  let Information = styled.div`
    font-family: Roboto;
    position: absolute;
    width: 90%;
    height: 10%;
    left: 5%;
    top: 5%;
    font-size: 18px;
    line-height: 42px;
  `;

  let InformationP = styled.p`
    color: #4e4e4e;
  `;

  if (isMobile) {
    Information = styled(Information)`
      line-height: 32px;
      font-size: 16px;
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