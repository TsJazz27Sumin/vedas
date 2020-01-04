import React from '../../../node_modules/react'
import styled from '../../../node_modules/styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../services/color';

const Information = (props) => {

  const dict = props.dict;

  let Information = styled.div`
  font-family: Roboto;
  font-size: 18px;
  
  width: 90%;
  height: 10%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 5%;
  left: 5%;
  right: 0%;
  bottom: 0%;
  
  line-height: 42px;
  `;

  let InformationP = styled.p`
  color: ${Color.lightGray};
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