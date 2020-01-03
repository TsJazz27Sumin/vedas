import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import ShareButtons from '../Common/ShareButtons'
import Color from '../../services/color';

const Content = (props) => {

  const dict = props.dict;

  let Content = styled.div`
  background: ${Color.white};
  
  border: 1px solid ${Color.white};
  border-radius: 16px;

  height: auto;
  width: 96%;

  padding: 0% 0% 5% 0%;
  margin:  0% 0% 0% 0%;
  
  left: 4%;
  `;

  let ShareButtonArea = styled.div`
  padding: 3% 0% 3% 4%;
  `;

  let Text1 = styled.div`
  border-radius: 54px;
  border: 8px solid ${Color.white};

  font-family: Roboto;
  font-size: 36px;
  color: ${Color.black};

  padding: 3% 0% 3% 3%;
  margin:  0% 0% 0% 0%;
  
  line-height: 30px;
`;

  let Text2 = styled.div`
  border-radius: 54px;
  border: 8px solid ${Color.white};
  
  font-family: Roboto;
  font-size: 22px;
  color: ${Color.black};

  padding: 0% 0% 0% 3%;
  margin:  0% 0% 0% 0%;

  line-height: 26px;
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