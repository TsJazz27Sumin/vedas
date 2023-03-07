import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';

const Text3 = (props) => {
  
  const StyledComponents = getStyledComponents();
  const Text3 = StyledComponents.Text3;

  return (
    <Text3><p>{props.dict.about_text3}</p></Text3>
  )
}

const getStyledComponents = () => {

  let Text3 = styled.div`
  font-family: Roboto;
  font-size: 48px;
  color: ${Color.black};

  border: 8px solid ${Color.white};

  padding: 0% 0% 0% 3.1%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 32.63%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  
  line-height: 56px;
  `;

  if (isMobile) {
    Text3 = styled(Text3)`
    font-size: 28px;

    top: 56.63%;
    left: 1%;
    right: 1%;
    `;
  }

  return {
    Text3 : Text3
  };
}

export default Text3