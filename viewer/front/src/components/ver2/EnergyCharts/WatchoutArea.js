import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const WatchoutArea = (props) => {

  const dict = props.dict;
  const checkedCount = props.checkedCount;

  let WatchoutArea = styled.div`
  margin-left: 6%;
`;

  let WatchoutTitle = styled.div`
  margin-top: 10%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 21px;

  color: #000;
`;

  let WatchoutTexts = styled.div`
  margin-top: 5%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;

  color: #000;
`;

  if (isMobile) {
    //nothing
  }

  WatchoutArea = styled(WatchoutArea)`margin-top: ${450 + (350 * checkedCount)}px`;

  return (
    <WatchoutArea>
      <WatchoutTitle>
        <p>{dict.watchout}</p>
      </WatchoutTitle>
      <WatchoutTexts>
        <p>{dict.watchout_info2}</p>
        <p>{dict.watchout_info3}</p>
        <p>{dict.watchout_info4}</p>
        <p>{dict.watchout_info5}</p>
      </WatchoutTexts>
    </WatchoutArea>
  )
}

export default WatchoutArea