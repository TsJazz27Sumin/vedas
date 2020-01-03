import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../../services/color';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Text4 from './Text4';
import Text5 from './Text5';

const Content = (props) => {

  const dict = props.dict;

  let Content = styled.div`
  border: 1px solid ${Color.white};
  border-radius: 16px;

  background: ${Color.white};

  height: 80%;
  width: 92%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 8%;
  left: 4%;
  right: 0%;
  bottom: 0%;
  `;

  if (isMobile) {
    Content = styled(Content)`
    height: 78%;

    top: 12%;
    left: 2%;
    `;
  }

  return (
    <Content>
      <Text1 dict={dict}/>
      <Text2 dict={dict}/>
      <Text3 dict={dict}/>
      <Text4 dict={dict}/>
      <Text5 dict={dict}/>
    </Content>
  )
}

export default Content