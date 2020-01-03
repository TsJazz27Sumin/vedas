import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import UsageAreaOneSvg from './UsageAreaOneSvg'
import Color from '../../../services/color';

const Content1 = (props) => {

  const dict = props.dict;
  const Text1 = props.Text1;
  const Text2 = props.Text2;

  let Content1 = styled.div`
  background: ${Color.white};
  border: 1px solid ${Color.white};
  border-radius: 16px;

  height: 19%;
  width: 96%;

  padding: 0% 0% 5% 0%;
  margin:  0% 0% 0% 0%;
  `;

  let UsageAreaOneTextArea1 = styled.div`
  height: auto;
  width: 80%;
  
  padding: 2.5% 0% 0% 6.8%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  `;

  let UsageAreaOneTextArea2 = styled.div`
  height: auto;
  width: 80%;

  padding: 12.7% 0% 0% 6.8%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  `;

  let UsageAreaOneTextArea3 = styled.div`
  height: auto;
  width: 80%;

  padding: 24.75% 0% 0% 6.8%;
  margin:  0% 0% 0% 0%;
  
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