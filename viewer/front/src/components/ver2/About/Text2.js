import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../../services/color';

const Text2 = (props) => {
  
  let Text2 = styled.div`
  font-family: Roboto;
  font-size: 22px;
  color: ${Color.black};

  border: 8px solid ${Color.white};

  padding: 0% 0% 0% 3.2%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 17.63%;
  left: 0%;
  right: 0%;
  bottom: 0%;

  line-height: 26px;
  `;

  if (isMobile) {
    Text2 = styled(Text2)`
    top: 35.63%;
    left: 1%;
    right: 1%;
    `;
  }

  return (
    <Text2><p>{props.dict.about_text2}</p></Text2>
  )
}

export default Text2