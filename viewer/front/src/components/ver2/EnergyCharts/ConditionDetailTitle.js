import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const ConditionDetailTitle = (props) => {

  let ConditionDetailTitle = styled.div`
    height: 0%;
    margin-top: 3%;
    padding-bottom: 3%;
    margin-left: 4%;
    font-family: Roboto;
    font-size: 22px;
    line-height: 26px;
    color: #000;
  ` ;

  if (isMobile) {
    ConditionDetailTitle = styled(ConditionDetailTitle)`
      margin-top: 0%;
      padding-bottom: 12%;
    `;
  }

  return (
    <ConditionDetailTitle>
      <p>{props.dict.analyze_condtion_text4}</p>
    </ConditionDetailTitle>
  )
}

export default ConditionDetailTitle