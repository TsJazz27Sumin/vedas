import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Content = (props) => {

  const dict = props.dict;

  let Content = styled.div`
  border: 1px solid #fff;
  border-radius: 16px;

  background: #fff;

  height: 80%;
  width: 92%;

  position: absolute;
  top: 8%;
  left: 4%;
  `;

  let Text = styled.div`
  font-family: Roboto;
  color: #000;

  position: absolute;
  `;

  let Text1 = styled(Text)`
  font-size: 42px;

  border: 8px solid #fff;

  padding-left:3%;

  line-height: 49px;   

  top: 7.63%;
  `;

  let Text2 = styled(Text)`
  font-size: 22px;

  border: 8px solid #fff;

  padding-left:3.2%;

  line-height: 26px;

  top: 17.63%;
  `;

  let Text3 = styled(Text)`
  font-size: 48px;

  border: 8px solid #fff;

  padding-left:3.1%;

  line-height: 56px;

  top: 32.63%;
  `;

  let Text4 = styled(Text)`
  font-size: 22px;

  padding-left:4%;

  line-height: 32px;

  top: 50.63%;
  `;

  let Text5 = styled(Text)`
  font-size: 22px;

  padding-left:4%;

  line-height: 32px;

  top: 62.63%;
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