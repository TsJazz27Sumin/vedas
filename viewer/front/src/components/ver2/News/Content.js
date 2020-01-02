import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import ShareButtons from '../Common/ShareButtons'

const Content = (props) => {

  const dict = props.dict;

  let Content = styled.div`
  width: 96%;
  left: 4%;

  background: #fff;
  border: 1px solid #fff;
  padding-bottom: 5%;
  border-radius: 16px;
`;

  let ShareButtonArea = styled.div`
  padding-top: 3%;
  padding-left: 4%;
  padding-bottom: 3%;
`;

  let Text1 = styled.div`
  padding-top: 3%;
  padding-left: 3%;
  padding-bottom: 3%;
  font-family: Roboto;
  font-size: 36px;
  line-height: 30px;
  border-radius: 54px;
  color: #000;
  border: 8px solid #fff;
`;

  let Text2 = styled.div`
  padding-left: 3%;
  font-family: Roboto;
  font-size: 22px;
  line-height: 26px;
  border-radius: 54px;
  color: #000;
  border: 8px solid #fff;
`;

  if (isMobile) {
    Content = styled(Content)`
    margin-top: 4%;
  `;
    Text1 = styled(Text1)`
    font-size: 22px;
  `;

    Text2 = styled(Text2)`
    font-size: 18px;
  `;

    ShareButtonArea = styled(ShareButtonArea)`
    padding-left: 50%;
  `;
  }

  return (
    <Content>
      <Text1><p>2020/02/01</p></Text1>
      <Text2><p>{dict.sample_news2}</p></Text2>
      <ShareButtonArea>
        <ShareButtons type={"small"} />
      </ShareButtonArea>
      <Text1><p>2020/01/18</p></Text1>
      <Text2><p>{dict.sample_news1}</p></Text2>
      <ShareButtonArea>
        <ShareButtons type={"small"} pathname={props.pathname}/>
      </ShareButtonArea>
    </Content>
  )
}

export default Content