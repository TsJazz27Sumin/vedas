import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import UsageAreaOneSvg from './UsageAreaOneSvg'

const Content1 = (props) => {

  const dict = props.dict;
  const Text1 = props.Text1;
  const Text2 = props.Text2;

  let Content1 = styled.div`
  background: #fff;
  
  border: 1px solid #fff;
  border-radius: 16px;

  height: 19%;
  width: 96%;
  
  padding-bottom: 5%;

  left: 4%;
  
  box-sizing: border-box;
  `;

  let UsageAreaOneTextArea1 = styled.div`
  width: 80%;
  
  padding-left: 6.8%;
  padding-top: 2.5%;
  
  position: absolute;
  `;

  let UsageAreaOneTextArea2 = styled.div`
  width: 80%;

  padding-left: 6.8%;
  padding-top: 12.7%;

  position: absolute;
  `;

  let UsageAreaOneTextArea3 = styled.div`
  width: 80%;

  padding-left: 6.8%;
  padding-top: 24.75%;
  
  position: absolute;
  `;

  if (isMobile) {
    Content1 = styled(Content1)`
    height: 10%;
    `;

    UsageAreaOneTextArea1 = styled(UsageAreaOneTextArea1)`
    display: none;
    `;

    UsageAreaOneTextArea2 = styled(UsageAreaOneTextArea2)`
    display: none;
    `;

    UsageAreaOneTextArea3 = styled(UsageAreaOneTextArea3)`
    display: none;
    `;
  }

  return (
    <Content1>
        <Text1><p>{dict.how_to_use_text1}</p></Text1>
        <Text1><p>{dict.how_to_use_text2}</p></Text1>
        <UsageAreaOneSvg/>
        <UsageAreaOneTextArea1>
          <Text1><p>{dict.how_to_use_text3}</p></Text1>
          <Text2><p>{dict.how_to_use_text4}</p></Text2>
        </UsageAreaOneTextArea1>
        <UsageAreaOneTextArea2>
          <Text1><p>{dict.how_to_use_text5}</p></Text1>
          <Text2><p>{dict.how_to_use_text6}</p></Text2>
          <Text2><p>{dict.how_to_use_text7}</p></Text2>
          <Text2><p>{dict.how_to_use_text8}</p></Text2>
        </UsageAreaOneTextArea2>
        <UsageAreaOneTextArea3>
          <Text1><p>{dict.how_to_use_text9}</p></Text1>
          <Text2><p>{dict.how_to_use_text10}</p></Text2>
          <Text2><p>{dict.how_to_use_text11}</p></Text2>
          <Text2><p>{dict.how_to_use_text12}</p></Text2>
        </UsageAreaOneTextArea3>
      </Content1>
  )
}

export default Content1