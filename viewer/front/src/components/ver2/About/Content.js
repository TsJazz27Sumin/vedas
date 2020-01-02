import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Content = (props) => {

  const dict = props.dict;

  let Content = styled.div`
    position: absolute;
    width: 92%;
    height: 80%;
    left: 4%;
    top: 8%;

    background: #fff;
    border: 1px solid #fff;
    border-radius: 16px;
  `;

  let Text = styled.div`
    position: absolute;
    font-family: Roboto;
    color: #000;
  `;

  let Text1 = styled(Text)`
    top: 7.63%;
    padding-left:3%;
    font-size: 42px;
    line-height: 49px;    
    border: 8px solid #fff;
  `;

  let Text2 = styled(Text)`
    top: 17.63%;
    padding-left:3.2%;
    font-size: 22px;
    line-height: 26px;
    border: 8px solid #fff;
  `;

  let Text3 = styled(Text)`
    top: 32.63%;
    padding-left:3.1%;
    font-size: 48px;
    line-height: 56px;
    border: 8px solid #fff;
  `;

  let Text4 = styled(Text)`
    top: 50.63%;
    padding-left:4%;
    font-size: 22px;
    line-height: 32px;
  `;

  let Text5 = styled(Text)`
    top: 62.63%;
    padding-left:4%;
    font-size: 22px;
    line-height: 32px;
  `;

  if (isMobile) {
    Content = styled(Content)`
      height: 78%;
      top: 12%;
      left: 2%;
    `;

    Text1 = styled(Text1)`
      top: 3%;
      left: 1%;
      right: 1%;
      font-size: 28px;
    `;

    Text2 = styled(Text2)`
      top: 35.63%;
      left: 1%;
      right: 1%;
    `;

    Text3 = styled(Text3)`
      top: 56.63%;
      left: 1%;
      right: 1%;
      font-size: 28px;
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