import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../../services/color';

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
    Content = styled(Content)`
    height: 78%;

    top: 12%;
    left: 2%;
    `;

    Text1 = styled(Text1)`
    font-size: 28px;

    top: 3%;
    left: 1%;
    right: 1%;
    `;

    Text2 = styled(Text2)`
    top: 35.63%;
    left: 1%;
    right: 1%;
    `;

    Text3 = styled(Text3)`
    font-size: 28px;

    top: 56.63%;
    left: 1%;
    right: 1%;
    `;

    Text4 = styled(Text4)`
    top: 81.63%;
    left: 1.5%;
    right: 1%;
    `;

    Text5 = styled(Text4)`
    display: none;
    `;
  }

  return (
    <Content>
      <Text1><p>{dict.about_text1}</p></Text1>
      <Text2><p>{dict.about_text2}</p></Text2>
      <Text3><p>{dict.about_text3}</p></Text3>
      <Text4>
        <p>{dict.about_text4}</p>
        <br />
        <br />
      </Text4>
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
    </Content>
  )
}

export default Content