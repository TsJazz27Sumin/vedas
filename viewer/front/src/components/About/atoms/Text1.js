import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../../services/color';

const Text1 = (props) => {
  
  const StyledComponents = getStyledComponents();
  const Text1 = StyledComponents.Text1;

  return (
    <Text1><p>{props.dict.about_text1}</p></Text1>
  )
}

const getStyledComponents = (lang) => {

  let Text1 = styled.div`
  font-family: Roboto;
  font-size: 42px;
  color: ${Color.black};

  border: 8px solid ${Color.white};

  padding: 0% 0% 0% 3%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 7.63%;
  left: 0%;
  right: 0%;
  bottom: 0%;

  line-height: 49px;   
  `;

  if (isMobile) {
    Text1 = styled(Text1)`
    font-size: 28px;

    top: 3%;
    left: 1%;
    right: 1%;
    `;
  }

  return {
    Text1 : Text1
  };
}

export default Text1