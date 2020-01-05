import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';

const Text5 = (props) => {

  const dict = props.dict;
  const StyledComponents = getStyledComponents();
  const Text5 = StyledComponents.Text5;

  return (
    <Text5>
      <p>{dict.about_text5}</p>
      <p>{dict.about_text6}</p>
      <br />
      <br />
      <p>{dict.about_text7}</p>
      <p>{dict.about_text8}</p>
      <br />
      <br />
      <p>{dict.about_text9}</p>
    </Text5>
  )
}

const getStyledComponents = () => {

  let Text5 = styled.div`
  font-family: Roboto;
  font-size: 22px;
  color: ${Color.black};

  padding: 0% 0% 0% 4%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 62.63%;
  left: 0%;
  right: 0%;
  bottom: 0%;

  line-height: 32px;
  `;

  if (isMobile) {
    Text5 = styled(Text5)`
    display: none;
    `;
  }

  return {
    Text5 : Text5
  };
}

export default Text5