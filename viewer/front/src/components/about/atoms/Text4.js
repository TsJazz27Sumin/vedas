import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';

const Text4 = (props) => {
  
  const StyledComponents = getStyledComponents();
  const Text4 = StyledComponents.Text4;

  return (
    <Text4>
      <p>{props.dict.about_text4}</p>
      <br/>
      <br/>
    </Text4>
  )
}

const getStyledComponents = () => {

  let Text4 = styled.div`
  font-family: Roboto;
  font-size: 22px;
  color: ${Color.black};

  padding: 0% 0% 0% 4%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 50.63%;
  left: 0%;
  right: 0%;
  bottom: 0%;

  line-height: 32px;
  `;

  if (isMobile) {
    Text4 = styled(Text4)`
    top: 81.63%;
    left: 1.5%;
    right: 1%;
    `;
  }

  return {
    Text4 : Text4
  };
}

export default Text4